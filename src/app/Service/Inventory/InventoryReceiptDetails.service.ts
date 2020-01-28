import { Injectable } from '@angular/core';
    import { Observable } from 'rxjs/Observable';
import {HttpClient,HttpHeaders} from "@angular/common/http"
import {map,tap,catchError} from "rxjs/operators" 

@Injectable()
export class InventoryReceiptDetailsService {
    constructor(private _http: HttpClient) {
        this._http = _http;
    }


    delete(url: string, id: number): Observable<any> {
        debugger;
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


}