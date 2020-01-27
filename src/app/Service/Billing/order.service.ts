﻿// Main dependencies
import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

// Models
import { Order, OrderItem, OrderItemRequest, MoverOrderItem } from '../../Model/order.model';

// Mocks
import { OrdersMock } from '../../mocks/orders.mock';
import {map,tap,catchError} from "rxjs/operators";
// Environments
import * as env from '../../../environments/environment';

import { Global } from '../../Shared/global';

@Injectable()
export class OrderService {
    // Constructor
    constructor(private http: HttpClient) {}

    /**
     * Load All Orders
     */
	loadKitchenOrders(): Observable<Order[]> {
		return this.http.get('/db.new.json').pipe(
		  	map((res: Response) => {
			    let orders = res.json()['orders'];
			  
			    orders.forEach((order: Order) => {
					order.OrderItems.forEach((item: any) => {
						item.Tags = item.Tags.split(',');
				  	});
			    });
			  
			    return orders;
			}));
	}

    /**
     * // Load All Orders for the given TicketId
     * @param TicketId 
     */
    loadOrders(TicketId: string): Observable<Order[]> {
        return this.http.get(Global.BASE_ORDERS_ENDPOINT + "?TicketId=" + TicketId).pipe(
            map((res: HttpResponse<Order[]>) => {
                let orders = res.body;
                orders.forEach((order: Order) => {
                    order.OrderItems.forEach((item: any) => {
                        item.Tags = item.Tags.split(',');
                    });
                });

                return orders;
            }));
    }

	/**
	 * Adds product in the given order
	 * @param payload 
	 */
    addOrderProduct(payload: OrderItemRequest) {
        debugger
        payload.OrderItem.Tags = <any>payload.OrderItem.Tags.join(',');
        
        return this.http.post(Global.BASE_ORDERS_ENDPOINT, payload).pipe(
             map((res: Response) => {
                return res.json();
            }));
    }

	/**
	 * Updates Order Item to the given order
	 * @param OrderId 
	 * @param OrderItem 
	 */
    updateOrderProduct(updateType: string, orderItemRequest: OrderItemRequest) {
        ' '
        let newRequest = JSON.parse(JSON.stringify(orderItemRequest));
        newRequest.OrderItem.Tags = <any>newRequest.OrderItem.Tags.join(',');
        ' '
        return this.http.post(Global.BASE_ORDERSUPDATE_ENDPOINT + "?updateType=" + updateType, newRequest).pipe(
            map((res: Response) => {
                return res.json();
            }));
    }

	/**
	 * Adds product in the given order
	 * @param payload 
	 */
    deleteOrderProduct(payload: any) {
        return this.http.post(Global.BASE_ORDERSCancel_ENDPOINT, payload).pipe(
            map((res: Response) => {
                return res.json();
            }));
    }

	/**
	 * Sends a move order item request to server
	 * @param payload 
	 */
    moveOrderItems(payload: MoverOrderItem) {
        return this.http.post(Global.BASE_ORDERSMove_ENDPOINT, payload).pipe(
            map((res: Response) => {
                return res.json();
            }));
    }

    // Converts in to JSON String
    getBody(data: any) {
        return JSON.stringify(data);
    }
}