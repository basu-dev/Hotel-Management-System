import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {HttpClient,HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import {map,tap,catchError} from "rxjs/operators";
import { UnitType } from 'src/app/Model/Inventory/UnitType';
import { ICategory } from 'src/app/Model/Category';
import { MenuItemPortion } from 'src/app/Model/Menu/MenuItemPortion';
import { InventoryReceiptDetails } from 'src/app/Model/Inventory/InventoryReceipt';
import { IWareHouse, IWareHouseType } from 'src/app/Model/WareHouse/WareHouse';

import { InventoryItem } from 'src/app/Model/Inventory/inventoryItem';

@Injectable()
export class AccountTransactionTypeService {
    constructor(private _http: HttpClient) {
        this._http = _http;
    }

    get(url: string): Observable<any> {
        return this._http.get(url).pipe(
         
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
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let options = ({ headers: headers });
        return this._http.delete(url + id, options).pipe(
         
            catchError(this.handleError));
    }

     getAccountTypes () {
        return this._http.get("/api/AccountTypeAPI/get").pipe(
           catchError(this.handleError))
    } 
    getInventoryItems():Observable<InventoryItem[]> {

        return this._http.get<InventoryItem[]>("/api/InventoryItemAPI/get").pipe(
         catchError(this.handleError))
    }

    getmasterledger() {
        return this._http.get("/api/MasterLedgerAPI/get").pipe(
            catchError(this.handleError))
    }
    //InventoryItems
    getCategories() {
        return this._http.get("/api/CategoryAPI/get").pipe(
            map((responseData) => responseData as ICategory[]));
            catchError(this.handleError)
    }

    getMenuUnits(url: string) {
        return this._http.get(url).pipe(
            map((responseData) => responseData as UnitType[]),
            catchError(this.handleError)   
            );
    }
    deleteConsumptionDetail(url: string, id: number): Observable<any> {
        let headers =  new HttpHeaders({ 'Content-Type': 'application/json' });
        let options =  ({ headers: headers });
        return this._http.delete(url + id, options).pipe(
            map((response: Response) => <any>response.json()),
            catchError(this.handleError));
    }

   

    getMenuConsumptionProductPortions() {
        return this._http.get("/api/MenuConsumptionProductPortionAPI/").pipe(
            map((responseData:Observable<MenuItemPortion>) => responseData));
    } 

    getMenuConsumptionCategoryFilters() {
        return this._http.get("/api/MenuConsumptionCategoryFilterAPI/").pipe(
            catchError(this.handleError));    } 

    getMenuConsumptionListDetails() {
        return this._http.get("/api/MenuConsumptionDetailAPI/").pipe(
            catchError(this.handleError));    } 


    

    getAccounts():Observable<Account> {

        return this._http.get<Account>("/api/AccountAPI/get").pipe(
            catchError(this.handleError)
        );
          
    } 
    getConsum(url: string): Observable<any> {
        return this._http.get(url).pipe(
           
            catchError(this.handleError));
    }

    getCost(url: string): Observable<any> {
        return this._http.get(url).pipe(
            
            catchError(this.handleError));
    }
    
    getInventoryReceipts() {

        return this._http.get("/api/InventoryReceiptDetailAPI/get").pipe(
            map((responseData:InventoryReceiptDetails[]) => responseData),
            catchError(this.handleError));
    }

    getWareHouse() {

        return this._http.get("/api/WareHouseAPI/").pipe(
            map((responseData:Observable<IWareHouse>) => responseData),
            catchError(this.handleError)
            );
    } 
    getroomtype() {
        return this._http.get("/api/RoomTypeAPI/get").pipe(
            catchError(this.handleError)
        )
           
    }

    getRoom() {
        return this._http.get("/api/RoomAPI/get").pipe(
            catchError(this.handleError)
        )
            
    }
    getWareHouseType():Observable<IWareHouseType> {
        
        return this._http.get<IWareHouseType>("/api/WareHouseTypeAPI/get")
            
        }
        private handleError(error: HttpErrorResponse) {
            return throwError(error.error|| 'Server error');
        }
        

  
}