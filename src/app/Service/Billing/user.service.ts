// Main dependencies
import { Injectable } from '@angular/core';
import { Headers, Http, Request, RequestMethod, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Global } from '../Shared/global';

// Models
import { User } from '../models/user.model';

// Environments
import * as env from '../../environments/environment';

@Injectable()
export class UserService {
	// Constructor
	constructor (private http: Http) {}

	// Load User
	loadUser (): Observable<User> {
		// Call to API here
		return this.http.get(Global.BASE_USER_ENDPOINT)
		  	.map((res: Response) => {
			  	return res.json()['user'];
			});
	}

	// Parse into Json
	getBody (data: User) {
		return JSON.stringify(data);
	}
}
