import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Order, OrderItem } from '../../../../Model/order.model';

@Component({
  selector: 'pos-options',
  templateUrl: './pos-options.component.html',
  styleUrls: ['./pos-options.component.css']
})
export class PosOptionsComponent implements OnInit {
    @Input('selectedItem') selectedItem: any;
    @Input('orders') orders: Observable<Order[]>;   
    @Output() removeItem: EventEmitter<OrderItem> = new EventEmitter<OrderItem>();
    @Output() toogleGiftItem: EventEmitter<OrderItem> = new EventEmitter<OrderItem>();
    @Output() voidItem: EventEmitter<OrderItem> = new EventEmitter<OrderItem>();
    @Output() incrementQty: EventEmitter<OrderItem> = new EventEmitter<OrderItem>();
    @Output() decrementQty: EventEmitter<OrderItem> = new EventEmitter<OrderItem>();
    @Output() moveItems: EventEmitter<OrderItem> = new EventEmitter<OrderItem>();
    @Output() showTicketNote: EventEmitter<any> = new EventEmitter<any>();
    @Output() createNewTicket: EventEmitter<any> = new EventEmitter<any>();
    @Output() printBill: EventEmitter<any> = new EventEmitter<any>();

    disableButton: boolean = true;
    parsedOrders: Order[];

    // Constructor
    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) { }

     // Initialize data here
     ngOnInit() {
        this.orders && this.orders.subscribe(orders => {
            this.parsedOrders = orders;
            return this.parsedOrders.length
                ? this.disableButton = false
                : this.disableButton = true;
        });
     }

	/**
	 * Removes item id already submitted else cancel the options
	 * @param item 
	 */
    cancel(item: OrderItem) {
        (item.Tags.indexOf('New Order') !== -1) && this.removeItem.emit(item);
        this.selectedItem = '';
    }

    // Toggle addition of the tags
    addTag(selectedItem: OrderItem, tag: string) {
        let giftIndex = selectedItem.Tags.indexOf('Gift');
        let submittedIndex = selectedItem.Tags.indexOf('Submitted');
            
        if (submittedIndex === -1 && giftIndex !== -1) {
            selectedItem.Tags.splice(giftIndex, 1);
            selectedItem.TotalAmount = selectedItem.Qty * selectedItem.UnitPrice / 1.13; //Add Function VAT Value Minues;
        } else {
            selectedItem.Tags.push(tag);
            selectedItem.TotalAmount = 0;
        }
        
        this.toogleGiftItem.emit(selectedItem);
    }

    // Redirects to tables view
    goToTablesView() {
        this.router.navigate(['/pos/tables']);
    }

    // Redirects to cuatomers view
    goToCustomerView() {
        this.router.navigate(['/pos/customers']);
    }
}
