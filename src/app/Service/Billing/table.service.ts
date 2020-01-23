// Main dependencies
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Global } from '../../Shared/global';
import {map} from "rxjs/operators";
// Models
import { Table } from '../../Model/table.model';
import { Category } from 'src/app/Model/category.model';

@Injectable()
export class TableService {
	// Constructor
	constructor (private http:HttpClient) {}

	// Load All Tables
	loadTables (): Observable<Table[]> {
		// Call to API here
        return this.http.get(Global.BASE_SCREENTABLES_ENDPOINT).pipe(
            map((res: HttpResponse<Table[]>) => {return  res.body} ))
	}
	loadCategories (): Observable<Category[]> {
		// Call to API here
        return this.http.get(Global.BASE_MENUCATEGORYNAMES_ENDPOINT).pipe(
            map((res: HttpResponse<Category[]>) => {
			  	return res.body;
			}))
	}

	// Load All Tables
	show (TableId: string): Observable<Table> {
		// Call to API here
		return this.http.get('/db.new.json').pipe(
		  	map((res: HttpResponse<Table>) => {
			  	return res.body['tables'][0];
			}));
	}

	// Update Table
    update(table: Table): Observable<Table> {
		return this.http.patch('/db.new.json', table).pipe(
			map((res: HttpResponse<Table>) => {
				return res.body['tables'][0];
			}));
	}

	// Delete table
    destroy(TableId: string): Observable<Table> {
		return this.http.delete(`/db.new.json/contacts/${TableId}`).pipe(
			map((res: HttpResponse<Table>) => {
				return res.body;
			}));
	}

	getBody (data: Table) {
		return JSON.stringify(data);
	}
}
