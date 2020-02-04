// Main dependencies
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Global } from '../../Shared/global';

import {HttpClient, HttpResponse} from "@angular/common/http";
// Models
import { Category } from '../../Model/category.model';
import {map} from 'rxjs/operators';

// Environments
import * as env from '../../../environments/environment';

@Injectable()
export class CategoryService {
	// Constructor
	constructor (private http: HttpClient) {}

	// Load All Categories
	loadCategories (): Observable<Category[]> {
		// Call to API here
        return this.http.get(Global.BASE_MENUCATEGORYNAMES_ENDPOINT).pipe(
            map((res:HttpResponse<Category[]>) => res.body));
	}

	// Parse into Json
	getBody (data: Category) {
		return JSON.stringify(data);
	}

}
