﻿import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {map, tap, catchError} from 'rxjs/operators';


@Injectable()
export class UsersService {
    constructor(private http: HttpClient) { }


    get(url: string): Observable<any> {
        return this.http.get(url).pipe(
            map((response: Response) => response.json()),
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError));
    }

    post(url: string, model: any): Observable<any> {
       //  ;
        const body = JSON.stringify(model);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const options = {
            headers
         };
        return this.http.post(url, body, options).pipe(
            map((response: Response) => response.json()),
            catchError(this.handleError));
    }

    put(url: string, id: number, model: any): Observable<any> {
        //  ;
        const body = JSON.stringify(model);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const options = {
            headers
         };
      //  const options =  ({ headers  });
        return this.http.put(url + id, body, options).pipe(
            map((response: Response) => response.json()),
            catchError(this.handleError));
    }

    delete(url: string, id: number): Observable<any> {
       //  ;
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const options = {
            headers
         };
     //   const options = new HttpHeaders({headers });
        return this.http.delete(url + id, options).pipe(
            map((response: Response) => response.json()),
            catchError(this.handleError));
    }

    getUsers() {
        return this.http.get('/api/UserAccountAPI/get').pipe(
            map((responseData: Response) => responseData.json()));

    }

    private handleError (error:HttpErrorResponse) {
        //  ;
        console.error(error);
        return  throwError(error.error || 'Server error');
    }
}
