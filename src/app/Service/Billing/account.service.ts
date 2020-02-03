import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpClient,HttpHeaders, HttpResponse, HttpErrorResponse} from "@angular/common/http";
import {map,tap,catchError} from "rxjs/operators";
import { throwError } from 'rxjs';

@Injectable()
export class AccountService {
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
    private handleError (error:HttpErrorResponse) {
        console.error(error);
           return  throwError(error.message|| 'Server error');  
    }

   
}