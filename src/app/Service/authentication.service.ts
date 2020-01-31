import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../Model/user.model';
import { IUser } from '../Model/User/user';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login  (url:string,model: any) {
        //debugger;
        let body = JSON.stringify(model);
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let options = { headers: headers };
        return this.http.post(url, body, options).pipe(
            map((response:IUser) => {
             
             console.log("login successful");
                
                let user = response;
                console.log(user);
                console.log(user.UserName)
                if (user != null) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    localStorage.setItem('userToken',JSON.stringify(user.Token));
                }
                
               
            }));
        
            }
    public isAuthenticated(): boolean {
        const user = localStorage.getItem('userToken');
        console.log(user);
        // if (user != null)
        // {
        //     return true;
        // }
        // else
        // {
        //     return false;
        // }
        return true;
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('userToken');
        localStorage.removeItem('currentUser');
    }
}