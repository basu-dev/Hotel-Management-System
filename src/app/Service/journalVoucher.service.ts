

import {HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import {map,catchError,tap} from "rxjs/operators";
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';



@Injectable()

export class JournalVoucherService {

    constructor(private _http: HttpClient) { }

    get(url: string): Observable<any> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let options = { headers: headers };
        return this._http.get(url, options).pipe(
                tap(data => console.log("All: " + JSON.stringify(data))),
            catchError(this.handleError));
    }

    post(url: string, model: any): Observable<any> {
         ;
        let body = JSON.stringify(model);
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let options = { headers: headers };
        return this._http.post(url, body, options).pipe(
            
    
            catchError(this.handleError));
    }

    put(url: string, id: number, model: any): Observable<any> {
         ;
        let body = JSON.stringify(model);
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let options = { headers: headers };
        return this._http.put(url + id, body,options)
                catchError(this.handleError);
    }

    RemoveTransactionValues(url: string, id: number) {
         ;
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let options = { headers: headers };
        return this._http.delete(url + id, options)
                catchError(this.handleError);
    }

    getAccountMonths() {
        return this._http.get("/api/NepaliMonthAPI/get")
            map((responseData:Response) => responseData.json());
    }

    getAccounts() {
        return this._http.get("/api/AccountAPI/get")
            map((responseData:Response) => responseData.json());
    } 

    getAccountTypes() {
        return this._http.get("/api/AccountTypeAPI/get")
        map((responseData:Response) => responseData.json());
    }

    delete(url: string, model: any): Observable<any> {
         ;
        let body = JSON.stringify(model);
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let options = { headers: headers, body: body };
        return this._http.delete(url, options)
                catchError(this.handleError);
    }

    private handleError (error:HttpErrorResponse) {
        console.error(error);
           return  throwError(error.message|| 'Server error');  
    }

}

