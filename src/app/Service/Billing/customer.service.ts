// Main dependencies
import { Injectable } from '@angular/core';

import {HttpClient, HttpResponse} from "@angular/common/http";
// Models
import { Customer } from '../../Model/customer.model';
import { Observable } from 'rxjs/Observable';
import { Global } from '../../Shared/global';
import {map} from 'rxjs/operators';

// Environments
import * as env from '../../../environments/environment';

@Injectable()
export class CustomerService {
	// Constructor
	constructor (private http: HttpClient) {}

	// Load All Customers
    loadCustomers(): Observable<Customer[]> {
		// Call to API here
        return this.http.get(Global.BASE_ACCOUNT_POSCUSTOMER_ENDPOINT).pipe(
		  	map((res: HttpResponse<Customer[]>) => {
			  	return res.body;
			}));
	}

	// Parse into Json
	getBody (data: Customer) {
		return JSON.stringify(data);
	}

}
