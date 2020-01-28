import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {map,tap,catchError} from "rxjs/operators";

@Injectable()
export class RoleService {
    constructor(private _http: HttpClient) { }

    get(url: string): Observable<any> {
        return this._http.get(url).pipe(
            map((response: Response) => <any>response.json()),
            tap(data => console.log("All: " + JSON.stringify(data))),
            catchError(this.handleError));
    }

    post(url: string, model: any): Observable<any> {
        let body = JSON.stringify(model);
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let options = ({ headers: headers });
        return this._http.post(url, body, options).pipe(
            map((response: Response) => <any>response.json()),
            catchError(this.handleError));
    }

    gets(url: string): Observable<any> {
        debugger
        return this._http.get(url).pipe(
            map((response: Response) => <any>response.json()),
            catchError(this.handleError));
    }

    posts(url: string, model: any): Observable<any> {
        debugger
        let body = JSON.stringify(model);
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let options = ({ headers: headers });
        return this._http.post(url, body, options).pipe(
            map((response: Response) => <any>response.json()),
            catchError(this.handleError));
    }

    put(url: string, Id: number, model: any): Observable<any> {
        debugger
        let body = JSON.stringify(model);
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let options = ({ headers: headers });
        return this._http.put(url + Id, body, options).pipe(
            map((response: Response) => <any>response.json()),
            catchError(this.handleError));
    }

    delete(url: string, id: number): Observable<any> {
        debugger;
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let options = ({ headers: headers });
        return this._http.delete(url + id, options).pipe(
            map((response: Response) => <any>response.json()),
            catchError(this.handleError));
    }

    getRoles() {
        return this._http.get("/api/RoleAPI/get").pipe(
            map((responseData) => responseData))
    
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json() || 'Server error');
    }
}