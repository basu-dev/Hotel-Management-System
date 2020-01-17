import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(url:string,model: any):Observable<any>  {
        //debugger;
        let body = JSON.stringify(model);
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let options = { headers: headers };
        return this.http.post(url, body, options).pipe(
            map((response: Response) => {
             console.log(url);
             console.log("login successful");
                // login successful 
                // let user = response.json();
                // console.log(user)
                // if (user != null) {
                //     // store user details  in local storage to keep user logged in between page refreshes
                //     localStorage.setItem('currentUser', JSON.stringify(user));
                // }
                
               
            }));
        
    }
    public isAuthenticated(): boolean {
        const user = localStorage.getItem('currentUser');
        if (user != null)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}