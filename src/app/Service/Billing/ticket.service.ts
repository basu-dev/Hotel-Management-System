// Main dependencies
import { Injectable } from '@angular/core';
import { Headers, Http, Request, RequestMethod, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Global } from '../Shared/global';

// Models
import { Ticket, PaymentSettle } from '../models/ticket.model';

@Injectable()
export class TicketService {
	// Constructor
	constructor(private http: Http) { }

	// Load Table Tickets
	loadTableTickets(tableId: string): Observable<Ticket[]> {
		// Call to API here
        return this.http.get(Global.BASE_SCREENTableTicket_ENDPOINT + "?TableId=" + tableId)
            .map((res: Response) => {
				return res.json();
			});
	}

	// Load Customer Tickets
	loadCustomerTickets(customerId: string): Observable<Ticket[]> {
		// Call to API here
        return this.http.get(Global.BASE_SCREENCustomerTicket_ENDPOINT  + "?CustomerId=" + customerId)
			.map((res: Response) => {
				return res.json();
			});
	}

	// Parse into Json
	getBody(data: any) {
		return JSON.stringify(data);
    }

	/**
	 * Calls the api to create a new ticket on the current table 
	 */
    createNewTicket(data: any) {
        // Call to API here
        return this.http.get('/db.new.json')
            .map((res: Response) => {
                return res.json()['tickets'][0];
            });
    }

    /**
     * Pay by cash
     * @param ticketId 
     * @param payDetails 
     */
    payTicketByCash(ticketId: number, payDetails: PaymentSettle) {
        // Call to API here
        return this.http.post(Global.BASE_POSSETTLEPAYMENT_ENDPOINT, payDetails)
            .map((res: Response) => {
                return res.json();
            });
    }

    /**
     * Pay by card
     * @param ticketId 
     * @param payDetails 
     */
    payTicketByCard(ticketId: number, payDetails: PaymentSettle) {
        // Call to API here
        return this.http.post(Global.BASE_POSSETTLEPAYMENT_ENDPOINT, payDetails)
            .map((res: Response) => {
                return res.json();
            });
    }

    /**
     * Pay by voucher
     * @param ticketId 
     * @param payDetails 
     */
    payTicketByVoucher(ticketId: number, payDetails: PaymentSettle) {
        // Call to API here
        return this.http.post(Global.BASE_POSSETTLEPAYMENT_ENDPOINT, payDetails)
            .map((res: Response) => {
                return res.json();
            });
    }
    
    /**
     * Pay by customer account
     * @param ticketId 
     * @param payDetails 
     */
    payTicketByCustomerAccount(ticketId: number, payDetails: PaymentSettle) {
        // Call to API here
        return this.http.post(Global.BASE_POSSETTLEPAYMENT_ENDPOINT, payDetails)
            .map((res: Response) => {
                return res.json();
            });
    }

    /**
     * Round off ticket
     * @param ticketId 
     * @param payDetails 
     */
    roundOffTicket(ticketId: number, payDetails: PaymentSettle) {
        // Call to API here
        return this.http.post(Global.BASE_POSSETTLEPAYMENT_ENDPOINT, payDetails)
            .map((res: Response) => {
                return res.json();
            });
    }

    /**
     * Add ticket note
     * @param ticketId 
     * @param note 
     */
    addTicketNote(ticketId: number, note: string) {
        // Call to API here
        return this.http.get(Global.BASE_TicketNote_ENDPOINT+ "?TicketId=" +ticketId+"&Note="+note)
            .map((res: Response) => {
                return res.json();
            });
    }

    /**
     * Print Bill
     * @param ticketId 
     * @param payDetails 
     */
    printBill(ticketId: number) {
        // Call to API here
        return this.http.get(Global.BASE_TicketPrint_ENDPOINT  + "?TicketId=" + ticketId)
            .map((res: Response) => {
                return res.json();
            });
    }

    /**
     * Add Discount on ticket
     * @param payDetails 
     */
    addDiscount(payDetails: PaymentSettle) {
        // Call to API here
        return this.http.post(Global.BASE_POSSETTLEPAYMENT_ENDPOINT, payDetails)
            .map((res: Response) => {
                return res.json();
            });
    }
}
