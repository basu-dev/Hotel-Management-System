// Main dependencies
import { Injectable } from '@angular/core';
import { Headers, Http, Request, RequestMethod, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Global } from '../Shared/global';

// Models
import { Product } from '../models/product.model';

@Injectable()
export class ProductService {
	// Constructor
	constructor (private http: Http) {}

	// Load All Products
	loadProducts (): Observable<Product[]> {
		// Call to API here
        return this.http.get(Global.BASE_MENUCATEGORYITEM_ENDPOINT)
            .map((res: Response) => {
			  	return res.json();
			});
	}

	// Convert json to string
	getBody (data: Product) {
		return JSON.stringify(data);
	}

}
