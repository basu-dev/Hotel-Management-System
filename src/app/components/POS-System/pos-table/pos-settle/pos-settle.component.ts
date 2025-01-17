import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as moment from 'moment';

// Actions
import * as actions from '../../../../actions/ticket.actions';

// Model
import { Table } from '../../../../Model/table.model';
import { Ticket, PaymentHistory } from '../../../../Model/ticket.model';
// import { Product } from '../../../../Model/product.model';
import { Order, OrderItem } from '../../../../Model/order.model';
import { Customer } from '../../../../Model/customer.model';

// Selectors
import * as ProductSelector from '../../../../selectors/product.selector';
import * as TicketSelector from '../../../../selectors/ticket.selector';
import * as TableSelector from '../../../../selectors/table.selector';
import * as CustomerSelector from '../../../../selectors/customer.selector';
import * as OrderSelector from '../../../../selectors/order.selector';

// Services
import { OrderStoreService } from '../../../../Service/store/order.store.service';
import { TicketStoreService } from '../../../../Service/store/ticket.store.service';
import { TableAdapter } from '../../../../adapters/table.adapter';
import { Product } from 'src/app/Model/product.model';

@Component({
  selector: 'app-pos-settle',
  templateUrl: './pos-settle.component.html',
  styleUrls: ['./pos-settle.component.css']
})

export class PosSettleComponent implements OnInit {
    // Variables declerations
    ticket: Ticket;
    table: Table;
    ticket$: Observable<Ticket>;
    ticketsLoading$: Observable<any>;    
    customerId$: Observable<any>;
    customer$: Observable<any>;
    ticketMessage$: Observable<string>;
    table$: Observable<Table>;
    products$: Observable<Product[]>;
    orders$: Observable<Order[]>;
    ordersLoading$: Observable<any>;
    parsedOrders: Order[]=[];

    selectedTable: Observable<any>;
    selectedTicket: number;
    selectedCustomerId: number = 0;

    selectedValue: any = '';
    totalPayable: any = '';
    totalPayableInt: number = 0;
    voidGiftSum: number = 0;
    actionMessage: any = '';
    isLoading: boolean = false;
    hasRefundable: boolean = false;

    currentUser: any;
    currentYear: any;

    // Constructor
    constructor(
        private store: Store<any>,
        private activatedRoute: ActivatedRoute,
        private orderStoreApi: OrderStoreService,
        private ticketStoreApi: TicketStoreService,
        private _location: Location
    ) {
        this.currentYear = JSON.parse(localStorage.getItem('currentYear'));
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.activatedRoute.params.subscribe(params => {
            if (this.selectedTicket) {
                this.orderStoreApi.loadOrdersByTicket(this.selectedTicket);
            }
        });
    }

    ngOnInit() {
        this.table$ = this.store.select(TableSelector.getCurrentTable);
        this.products$ = this.store.select(ProductSelector.getAllProducts);
        this.ticketsLoading$ = this.store.select(TicketSelector.getLoadingStatus);
        this.ticket$ = this.store.select(TicketSelector.getCurrentTicket);
        this.ordersLoading$ = this.store.select(OrderSelector.getLoadingStatus);    
        this.orders$ = this.store.select(OrderSelector.getAllOrders);
        this.ticketMessage$ = this.store.select(TicketSelector.getTicketMessage);
        this.customerId$ = this.store.select(CustomerSelector.getCurrentCustomerId);
        this.customer$ = this.store.select(CustomerSelector.getCurrentCustomer);

        // Subscriptions
        this.ticket$.subscribe((ticket: Ticket) => {
            if (ticket) {
                this.ticket = ticket;
                this.totalPayable = this.getFinalBalance().toFixed(2);
                this.selectedCustomerId = ticket.CustomerId;
                this.selectedValue = '';
                this.isLoading = false;
            }
        });

        this.table$.subscribe((table: Table) => {
            if (table) {
                this.table = table;
            }
        });

        this.customerId$.subscribe((customerId: any) => {
            this.selectedCustomerId = customerId ? customerId : 0;
        });

        this.orders$.subscribe((orders: Order[]) => {
            if (orders.length) {
                this.parsedOrders = this.mergeDuplicateItems(orders);
            }
        });

        this.ticketsLoading$.subscribe((isLoading: boolean) => {
            this.isLoading = isLoading;
        });

        this.ordersLoading$.subscribe((isLoading: boolean) => {
            this.isLoading = isLoading;
        });
    }
	/**
	 * Item Price
	 * @param UnitPrice 
	 * @param Qty 
	 */
    ProductPrice(UnitPrice: number, Qty: number) {
        let currentprice = UnitPrice / 1.13 * Qty;
        // Return product
        return currentprice.toFixed(2);
    }
    /**
     * Merge Duplicate Items
     */
    mergeDuplicateItems(orders: Order[]) {
        var orders: Order[] = JSON.parse(JSON.stringify(orders));
        orders.forEach((order: Order) => {
            var counts = [];
            order.OrderItems.forEach((a, i) => {
                if(counts[a.ItemId] === undefined) {
                    counts[a.ItemId] = a;
                } else {
                    counts[a.ItemId].Qty += a.Qty;
                }
            });
            order.OrderItems = counts;
            order.OrderItems = order.OrderItems.filter((n) => n != undefined); 
        });

        return orders;
    }

    // Calculate sum of the items in a order list
    // -> Avoids void and gift items from calculation of total
    calculateSum (): number {
        let totalAmount = 0;

        if (this.parsedOrders.length) {
            this.parsedOrders.forEach((order) => {
                totalAmount = totalAmount +
                    (order.OrderItems.length) ? order.OrderItems.reduce((total: number, order: OrderItem) => {
                        return eval((total + order.Qty * order.UnitPrice / 1.13).toFixed(2));
                    }, 0) : 0;
            });
        }

        return eval(totalAmount.toFixed(2));
    }

    /**
     * Calculates void and gift sum
     */
    calculateVoidGiftSum(): number {
        let totalSum = 0;
        if (this.parsedOrders.length) {
            this.parsedOrders.forEach((order) => {
                var finalTotal = (order.OrderItems.length) ? order.OrderItems.forEach((order: OrderItem) => {
                    if (order.IsVoid || (order.Tags && order.Tags.indexOf('Gift')) != -1) {
                        totalSum = eval((totalSum + order.Qty * order.UnitPrice / 1.13).toFixed(2));
                    }
                }) : 0;
            });
        }

        return eval(totalSum.toFixed(2));
    }

    /**
     * Filter product by product ID
     * @param products 
     * @param productId 
     */
    getProductById(products: Product[], productId: number) {
        var products: Product[] = products.filter((product: Product) => product.Id === productId);
        // Return product
        return products.length ? products[0] : {};
    }

    // Calculates Discount
    calculateDiscount() {
        let sum = this.calculateSum();
        let giftSum = this.calculateVoidGiftSum();
        let value = (giftSum / sum) * 100 || 0;

       return (this.ticket.Discount)
            ? this.ticket.Discount.toFixed(2)
            : (sum * (value / 100)).toFixed(2);
    }

    // Calculates VAT Amount
    calculateVat() {
        let taxableAmount = this.calculateSum() - eval(this.calculateDiscount()) + eval(this.calculateServiceCharge());
        return (taxableAmount * 0.13).toFixed(2);
    }

    /**
     * Calculates the grand total of the ticket
     */
    getGrandTotal() {
        let taxableAmount = this.calculateSum() - eval(this.calculateDiscount()) + eval(this.calculateServiceCharge());
        return (taxableAmount + taxableAmount * 0.13).toFixed(2);
    }

    /**
     * Calculates the final balace of the ticket 
     */
    getFinalBalance(): number {
        let finalBalance = 0;
        const balanceCalc = eval(this.getGrandTotal()) - this.getTotalCharged(this.ticket);

        if (balanceCalc < 0) {
            this.hasRefundable = true;
            this.totalPayable = '0.00';
            this.totalPayableInt = 0;
            finalBalance = balanceCalc * (-1);
        } else {
            this.hasRefundable = false;
            finalBalance = balanceCalc;            
            this.totalPayable = finalBalance.toFixed(2);
            this.totalPayableInt = finalBalance; 
        }

        return finalBalance;
    } 

    /**
     * Select a value form the table
     * @param value 
     */
    selectValue(value: string) {
        if (value === 'C') {
            this.selectedValue = '';
        } else {
            if (this.selectedValue.indexOf('.') === -1 || value !== '.') {
                this.selectedValue = this.selectedValue + value;
            }
        }
    }

    /**
     * Adds discount to the total ticket amount
     */
    addDiscount() {
        var r = confirm("Are you sure you want to continue?");
        if (r === false) {
            return false;
        }

        let previousPayment = this.getTotalCharged(this.ticket);
        let ticketTotal =  this.calculateSum();
        let finalBalance =  this.getFinalBalance();
        //let discountAmt = eval(this.selectedValue) / 100 * ticketTotal;
        let discountAmt = eval(this.selectedValue);
        let isValid = previousPayment
            ? (discountAmt > finalBalance)
                ? 0
                : discountAmt
            : (discountAmt > ticketTotal)
                ? 0
                : discountAmt

        if (!isValid) {
           alert("Discount can't be greater than Ticket Total or Remaining Balance.");
           return false;
        } else {
            this.ticket.Discount = isValid;
            this.addTicketDiscount(this.ticket);
        }
    }

    /**
     * Calculates Last payment time
     * @param ticket 
     */
    getLastPaymentTime(ticket: Ticket) {
        return ticket && ticket.PaymentHistory.length && this.getDate(ticket.PaymentHistory[0].DateTime);
    }

    /**
     * Calculates total charged amount
     * @param ticket 
     */
    getTotalCharged(ticket: Ticket) {
        return ticket.PaymentHistory.reduce((total: number, pay: PaymentHistory) => {
            total = total + pay.AmountPaid;
            return total;
        }, 0);
    }

    /**
     * Gets formatted date
     * @param date 
     */
    getDate(date: string) {
        return moment(date).format("DD/MM/YYYY HH:mm:ss A");
    }

    // Call to make the ticket pay by cash
    payCash(ticket: Ticket) {
        var r = confirm("Are you sure you want to continue?");
        if (r == false) {
            return false;
        }

        // if (this.selectedValue > eval(this.getFinalBalance().toString())) {
        //     alert("Charged amount can't be greater than ticket final balance.");
        //     return false;
        // }

        this.isLoading = true;
        this.ticketStoreApi.payByCash(ticket.Id, {
            "TicketId": ticket.Id,
            "Charged": this.selectedValue,
            "Discount": this.ticket.Discount,
            "PaymentMode": "Cash",
            "FinancialYear": this.currentYear.Name,
            "UserName": this.currentUser.UserName
        });
    }

    // Call to make the ticket pay by card  
    payByCard(ticket: Ticket) {
        // if (this.selectedValue > eval(this.getFinalBalance().toString())) {
        //     alert("Charged amount can't be greater than ticket final balance.");
        //     return false;
        // }

        var r = confirm("Are you sure you want to continue?");
        if (r == false) {
            return false;
        }

        this.isLoading = true;
        this.ticketStoreApi.payByCard(ticket.Id, {
            "TicketId": ticket.Id,
            "Charged": this.selectedValue,
            "Discount": this.ticket.Discount,
            "PaymentMode": "Card",
            "FinancialYear": this.currentYear.Name,
            "UserName": this.currentUser.UserName
        });
    }

    // Call to make the ticket pay by voucher
    payVoucher(ticket: Ticket) {
        // if (this.selectedValue > eval(this.getFinalBalance().toString())) {
        //     alert("Charged amount can't be greater than ticket final balance.");
        //     return false;
        // }

        var r = confirm("Are you sure you want to continue?");
        if (r == false) {
            return false;
        }

        this.isLoading = true;
        this.ticketStoreApi.payByVoucher(ticket.Id, {
            "TicketId": ticket.Id,
            "Charged": this.selectedValue,
            "Discount": this.ticket.Discount,
            "PaymentMode": "Voucher",
            "FinancialYear": this.currentYear.Name,
            "UserName": this.currentUser.UserName
        });
    }

    // Call to make the ticket pay by customer account
    payCustomerAmount(ticket: Ticket) {
        // if (this.selectedValue > eval(this.getFinalBalance().toString())) {
        //     alert("Charged amount can't be greater than ticket final balance.");
        //     return false;
        // }

        var r = confirm("Are you sure you want to continue?");
        if (r == false) {
            return false;
        }

        this.isLoading = true;
        this.ticketStoreApi.payCustomerAccount(ticket.Id, {
            "TicketId": ticket.Id,
            "Charged": this.selectedValue,
            "Discount": this.ticket.Discount,
            "PaymentMode": "Customer",
            "FinancialYear": this.currentYear.Name,
            "UserName": this.currentUser.UserName
        });
    }

    // Call to make the ticket round offed
    roundTicket(ticket: Ticket) {
        this.isLoading = false;
        this.ticketStoreApi.roundTicket(ticket.Id, {
            "TicketId": ticket.Id,
            "Charged": this.selectedValue,
            "Discount": this.ticket.Discount,
            "PaymentMode": "TicketRound",
            "FinancialYear": this.currentYear.Name,
            "UserName": this.currentUser.UserName
        });
    }

    // Call to make the ticket round offed
    addTicketDiscount(ticket: Ticket) {
        this.isLoading = true;
        this.ticketStoreApi.addDiscount({
            "TicketId": ticket.Id,
            "charged": 0,
            "discount": this.ticket.Discount,
            "PaymentMode": "Discount",
            "FinancialYear": this.currentYear.Name,
            "UserName": this.currentUser.UserName,
            "PosSettle": this.prepareRequestObject()
        });
    }

    /**
     * Calculates the Total Service Charge
     */
    calculateServiceCharge() {
        //let totalSum = this.calculateSum();
        //let discountAmount = this.calculateDiscount();
        //let ticketTotalAfterDiscount = totalSum - eval(discountAmount);

        //return (ticketTotalAfterDiscount * 0.1).toFixed(2);
        let servicecharge=0;
        return servicecharge.toFixed(2);
    }

    // Call to make the ticket round offed
    printBill(ticket: Ticket) {
        this.isLoading = true;
        this.ticketStoreApi.printBill(ticket.Id);
    }

    // Go back to last page
    close(ticket: Ticket) {
        this._location.back();
    }

    // Chooses the selected value
    choose(value) {
        this.selectedValue = value;
    }

    /**
     * Prepares the Request Object
     */
    prepareRequestObject() {
        return {
            TicketId: this.ticket.Id,
            TableId:  this.table ? this.table.TableId : '',
            CustomerId: this.selectedCustomerId || '',
            OrderId: '',
            OrderItem: '',
            Discount: this.ticket.Discount,
            TicketTotal: (this.calculateSum()).toFixed(2),
            ServiceCharge: this.calculateServiceCharge(),
            VatAmount: this.calculateVat(),
            GrandTotal: this.getGrandTotal(),
            Balance: this.getFinalBalance().toFixed(2),
            RemainingBalance: this.hasRefundable ? (this.getFinalBalance() * (-1)).toFixed(2) : (0).toFixed(2)
        };
    }
}
