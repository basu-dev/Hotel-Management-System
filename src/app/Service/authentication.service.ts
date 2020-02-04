import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {map, catchError} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { User } from '../Model/user.model';
import { IUser } from '../Model/User/user';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(url:string,model: any){
       
        let body = JSON.stringify(model);
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let options = { headers: headers };
        return this.http.post<IUser>(url, body, options).pipe(
            
            catchError(this.handleError)
        )}
    public isAuthenticated(): boolean {
        const user = localStorage.getItem('userToken');
        if (user != null)
        {
            return true;
        }
        else
        {
            return false;
        }
        return true;
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('userToken');
        localStorage.removeItem('currentUser');
    }
    public handleError(error:HttpErrorResponse){
        return throwError(error.error);
    }
}