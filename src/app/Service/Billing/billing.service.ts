import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { Customer } from 'src/app/Model/customer.model';
import { Global } from 'src/app/Shared/global';
import { Product } from 'src/app/Model/product.model';
import { Table } from 'src/app/Model/table.model';
import { Category } from 'src/app/Model/category.model';
import { User } from 'src/app/Model/user.model';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  
    constructor(private _http: HttpClient) {
        this._http = _http;
    }

    get(url: string): Observable<any> {
        return this._http.get(url).pipe(
                tap(data => console.log("All: " + JSON.stringify(data))),
            catchError(this.handleError));
    }

    post(url: string, model: any): Observable<any> {
        let body = JSON.stringify(model);
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let options = ({ headers: headers });
        return this._http.post(url, body, options).pipe(
                catchError(this.handleError));
    }

    put(url: string, id: number, model: any): Observable<any> {
        let body = JSON.stringify(model);
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let options = ({ headers: headers });
        return this._http.put(url + id, body, options).pipe(
                catchError(this.handleError));
    }

    delete(url: string, id: number): Observable<any> {
         ;
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let options = ({ headers: headers });
        return this._http.delete(url + id, options).pipe(
                catchError(this.handleError));
    }

    getAccountTypes() {

        return this._http.get("/api/AccountTypeAPI/get");
    }

    loadCustomers(): Observable<Customer[]> {
      // Call to API here
          return this._http.get<Customer[]>(Global.BASE_ACCOUNT_POSCUSTOMER_ENDPOINT)
          

    }
    	// Load All Products
	loadProducts (): Observable<Product[]> {
		// Call to API here
        return this._http.get<Product[]>(Global.BASE_MENUCATEGORYITEM_ENDPOINT)
       
	}
	loadTables (): Observable<Table[]> {
		// Call to API here
        return this._http.get<Table[]>(Global.BASE_SCREENTABLES_ENDPOINT)
  }
	loadCategories (): Observable<Category[]> {
		// Call to API hered
        return this._http.get<Category[]>(Global.BASE_MENUCATEGORYNAMES_ENDPOINT)
  }
	// Load All Tables
	show (TableId: string): Observable<Table> {
		// Call to API here
		return this._http.get<Table>('/db.new.json')
		  
	}

	// Update Table
    update(table: Table): Observable<Table> {
		return this._http.patch<Table>('/db.new.json', table)
		
	}

	// Delete table
    destroy(TableId: string): Observable<Table> {
		return this._http.delete<Table>(`/db.new.json/contacts/${TableId}`)
		
	}
	loadUser (): Observable<User> {
		// Call to API here
		return this._http.get<User>(Global.BASE_USER_ENDPOINT)

  }
  getMenuItems() {
    return this._http.get(Global.BASE_MENUITEM_ENDPOINT)
        
}

getMenu() {
    return this._http.get(Global.BASE_MENU_ENDPOINT)
       
}
getMenuConsumptionProductPortions() {
  return this._http.get(Global.BASE_MENUITEM_PRODUCT_PORTION_ENDPOINT)
      
} 

getMenuConsumptionCategoryFilters() {
  return this._http.get(Global.BASE_MENUITEM_ConsumptionCategory_ENDPOINT)
      
} 

getMenuConsumptionListDetails() {
  return this._http.get(Global.BASE_MENUCONSUMPTIONDETAILS_ENDPOINT)
      
} 
getMenuCategories() {
  return this._http.get(Global.BASE_MENUCATEGORY_ENDPOINT)
      
}
getInventoryItems(){
  return this._http.get(Global.BASE_INVENTORY_ENDPOINT)
      
} 
getCategories() {
  return this._http.get(Global.BASE_MENUCATEGORY_ENDPOINT)
}

getAccounts() {

  return this._http.get(Global.BASE_ACCOUNT_ENDPOINT)
      
} 
    // Parse into Json
    getBody (data: any) {
      return JSON.stringify(data);
    }
    private handleError (error:HttpErrorResponse) {
        console.error(error);
           return  throwError(error.message|| 'Server error');  
    }
}
