import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import{map,tap,catchError} from 'rxjs/operators';


@Injectable()
export class LoginService {
    constructor(private _http: HttpClient) { }

    get(url: string): Observable<any> {
        return this._http.get(url).pipe(
            map((response: Response) => <any>response.json()),
            tap(data => console.log("All: " + JSON.stringify(data))),
            catchError(this.handleError));
    }

    login(url: string, model: any): Observable<any> {
        debugger;
        let body = JSON.stringify(model);
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let options = { headers: headers };
        return this._http.post(url, body, options).pipe(
            map((response: Response) => <any>response.json()),
            catchError(this.handleError));
    }


    private handleError(error: Response) {
        //debugger;
        console.error(error);
        return Observable.throw(error.json() || 'Server error');
    }
}