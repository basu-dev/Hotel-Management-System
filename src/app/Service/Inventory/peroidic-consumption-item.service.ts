import { Injectable } from '@angular/core';
  import { AccountType } from '../../Model/AccountType/accountType';

  import { Observable } from 'rxjs/Observable';
import {HttpClient,HttpHeaders} from "@angular/common/http"
import {map,tap,catchError} from "rxjs/operators" 
import { IWareHouse } from 'src/app/Model/WareHouse/WareHouse';
import { InventoryReceiptDetails } from 'src/app/Model/Inventory/InventoryReceipt';

@Injectable()
export class PeriodicConsumptionItemService {

    constructor(private _http: HttpClient) { }

    get(url: string): Observable<any> {
        return this._http.get(url).pipe(
            map((response: Response) => <any>response.json()),
            tap(data => console.log("All: " + JSON.stringify(data))),
            catchError(this.handleError));
    }

    getConsum(url: string): Observable<any> {
        return this._http.get(url).pipe(
            map((response: Response) => <any>response.json()),
            tap(data => console.log("All: " + JSON.stringify(data))),
            catchError(this.handleError));
    }

    getCost(url: string): Observable<any> {
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
        debugger;
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

    getInventoryItems() {

        return this._http.get("/api/InventoryItemAPI/get").pipe(
            map((responseData) => responseData));
    }


    getInventoryReceipts() {

        return this._http.get("/api/InventoryReceiptDetailAPI/get").pipe(
            map((responseData:InventoryReceiptDetails[]) => responseData));
    }

    getWareHouse() {

        return this._http.get("/api/WareHouseAPI/").pipe(
            map((responseData:Observable<IWareHouse>) => responseData));
    } 

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json()|| 'Server error');
    }
}