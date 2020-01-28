import { Injectable, ComponentRef, TemplateRef, EventEmitter, RendererFactory2 } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpClient,HttpHeaders} from "@angular/common/http"
import {map,tap,catchError} from "rxjs/operators" 


@Injectable()
export class MenuConsumptionService {
    constructor(private _http: HttpClient) {
        this._http = _http;
    }

    get(url: string): Observable<any> {
        return this._http.get(url).pipe(
            map((response: Response) => <any>response.json()),
            tap(data => console.log("All: " + JSON.stringify(data))),
            catchError(this.handleError));
    }

    gets(url: string): Observable<any> {
        debugger
        return this._http.get(url).pipe(
            map((response: Response) => <any>response.json()),
            catchError(this.handleError));
    }


    post(url: string, model: any): Observable<any> {
        let body = JSON.stringify(model);
        let headers =  new HttpHeaders({ 'Content-Type': 'application/json' });
        let options =  ({ headers: headers });
        return this._http.post(url, body, options).pipe(
            map((response: Response) => <any>response.json()),
            catchError(this.handleError));
    }

    posts(url: string, model: any): Observable<any> {
        let body = JSON.stringify(model);
        let headers =  new HttpHeaders({ 'Content-Type': 'application/json' });
        let options =  ({ headers: headers });
        return this._http.post(url, body, options).pipe(
            map((response: Response) => <any>response.json()),
            catchError(this.handleError));
    }

    put(url: string, id: number, model: any): Observable<any> {
        let body = JSON.stringify(model);
        let headers =  new HttpHeaders({ 'Content-Type': 'application/json' });
        let options =  ({ headers: headers });
        return this._http.put(url + id, body, options).pipe(
            map((response: Response) => <any>response.json()),
            catchError(this.handleError));
    }

    delete(url: string, id: number): Observable<any> {
        let headers =  new HttpHeaders({ 'Content-Type': 'application/json' });
        let options =  ({ headers: headers });
        return this._http.delete(url + id, options).pipe(
            map((response: Response) => <any>response.json()),
            catchError(this.handleError));
    }

    deleteConsumptionDetail(url: string, id: number): Observable<any> {
        let headers =  new HttpHeaders({ 'Content-Type': 'application/json' });
        let options =  ({ headers: headers });
        return this._http.delete(url + id, options).pipe(
            map((response: Response) => <any>response.json()),
            catchError(this.handleError));
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json()|| 'Server error');
    }

    getMenuConsumptionProductPortions() {
        return this._http.get("/api/MenuConsumptionProductPortionAPI/").pipe(
            map((responseData) => responseData));
    } 

    getMenuConsumptionCategoryFilters() {
        return this._http.get("/api/MenuConsumptionCategoryFilterAPI/").pipe(
            map((responseData) => responseData));
    } 

    getMenuConsumptionListDetails() {
        return this._http.get("/api/MenuConsumptionDetailAPI/").pipe(
            map((responseData) => responseData));
    } 
}

