import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {map,tap,catchError} from "rxjs/operators" 
import { ICategory } from 'src/app/Model/Category';

@Injectable()
export class InventoryItemService {

    _entityUrl: string = '';
    constructor(private _http: HttpClient) { }

    get(url: string): Observable<any> {
        debugger
        return this._http.get(url).pipe(
            map((response: Response) => <any>response.json()),
            tap(data => console.log("All: " + JSON.stringify(data))),
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

    put(url: string, id: number, model: any): Observable<any> {
        let body = JSON.stringify(model);
        let headers =  new HttpHeaders({ 'Content-Type': 'application/json' });
        let options =  ({ headers: headers });
        return this._http.put(url + id, body, options)
            map((response: Response) => <any>response.json())
            catchError(this.handleError);
    }

    delete(url: string, id: number): Observable<any> {
        let headers =  new HttpHeaders({ 'Content-Type': 'application/json' });
        let options =  ({ headers: headers });
        return this._http.delete(url + id, options).pipe(
            map((response: Response) => <any>response.json()),
            catchError(this.handleError));
    }
    getCategories() {
        return this._http.get("/api/CategoryAPI/get").pipe(
            map((responseData) => responseData as ICategory[]));
    }

    getMenuUnits(url: string) {
        return this._http.get(url).pipe(
            map((responseData) => responseData));
    }

    //getInventoryItems() {
    //    return this._http.get("/api/InventoryItemAPI/Get")map((responseData) => responseData.json());
    //}
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json()|| 'Server error');
    }

}