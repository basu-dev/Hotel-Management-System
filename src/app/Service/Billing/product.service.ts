// Main dependencies
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Global } from '../../Shared/global';

// Models
import { Product } from '../../Model/product.model';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductService {
	// Constructor
	constructor (private http: HttpClient) {}

	// Load All Products
	loadProducts (): Observable<Product[]> {
		// Call to API here
        return this.http.get(Global.BASE_MENUCATEGORYITEM_ENDPOINT).pipe(
            map((res: HttpResponse<Product[]>) => {
			  	return res.body;
			}));
	}

	// Convert json to string
	getBody (data: Product) {
		return JSON.stringify(data);
	}

}
