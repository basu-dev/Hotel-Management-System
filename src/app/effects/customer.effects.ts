import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { Actions, Effect ,ofType} from '@ngrx/effects';

import { Observable} from 'rxjs/Observable';


import { Customer } from '../Model/customer.model';
import { CustomerService } from '../Service/Billing/customer.service';

import * as customerActions from '../actions/customer.actions';
import { map,catchError,switchMap,mergeMap } from 'rxjs/operators';

// Custom Action
export class CAction implements Action {
	type: string;
	payload: any;
}

@Injectable()
export class CustomerEffects {
	
	// Constructor
	constructor(
		private api: CustomerService,
		private actions$: Actions
	) {}

	@Effect()
	loadAction$: Observable<Action> = this.actions$.pipe(
		ofType(customerActions.ActionTypes.LOAD),
		switchMap(() => this.api.loadCustomers().pipe(
			map(res => new customerActions.LoadCompletedAction({'customers': res})),
			catchError(() => Observable.of({ 'type': customerActions.ActionTypes.LOAD_ERROR }))
		)));
}
