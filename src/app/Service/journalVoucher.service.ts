

import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map,catchError,tap} from "rxjs/operators";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable()

export class JournalVoucherService {

    constructor(private _http: HttpClient) { }

    get(url: string): Observable<any> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let options = { headers: headers };
        return this._http.get(url, options).pipe(
            map((response: Response) => <any>response.json()),
            tap(data => console.log("All: " + JSON.stringify(data))),
            catchError(this.handleError));
    }

    post(url: string, model: any): Observable<any> {
        debugger;
        let body = JSON.stringify(model);
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let options = { headers: headers };
        return this._http.post(url, body, options).pipe(
            
            map((response: Response) => <any>response.json()),

            catchError(this.handleError));
    }

    put(url: string, id: number, model: any): Observable<any> {
        debugger;
        let body = JSON.stringify(model);
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let options = { headers: headers };
        return this._http.put(url + id, body,options)
            map((response: Response) => <any>response.json()),
            catchError(this.handleError);
    }

    RemoveTransactionValues(url: string, id: number) {
        debugger;
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let options = { headers: headers };
        return this._http.delete(url + id, options)
            map((response: Response) => <any>response.json()),
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
        debugger;
        let body = JSON.stringify(model);
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let options = { headers: headers, body: body };
        return this._http.delete(url, options)
            map((response: Response) => <any>response.json()),
            catchError(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json() || 'Server error');
    }

}

