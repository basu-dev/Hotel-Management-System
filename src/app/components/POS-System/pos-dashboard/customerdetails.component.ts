﻿//import { Component, Input } from '@angular/core';
//import { Router, Params, ActivatedRoute } from '@angular/router';
//import 'rxjs/add/operator/switchMap';
//import { Customer } from '../../models/customer.model';
//import { ReservationCustomerService } from '../../services/reservation/customer.services';

//@Component({
//    selector: 'employee-detail',
//    templateUrl: 'customerdetails.component.html',
//})

//export class CustomerDetailComponent {

//    customer: Customer;
//    pageTitle: string = 'Customer Details';
//    selectedEmployeeId: number = null;
//    constructor(
//        private router: Router,
//        private route: ActivatedRoute,
//        private _customerService: ReservationCustomerService,
//    ) { }

//    ngOnInit(Id: number) {
//        //this.route.params
//        //    .switchMap((params: Params) =>
//        //        this._customerService.getCustomerList(params['Id']))
//        //    .subscribe((customerData: Customer) => {
//        //        debugger;
//        //        this.customer = customerData;
//        //        console.log(customerData);
//        //    });

//        this.route.paramMap.subscribe((params: Params) => {
//            debugger
//            let Id = parseInt(params.get('Id'));
//            this.selectedEmployeeId = Id;
//            this._customerService.getCustomerList(Id).subscribe((customerData: Customer) => {
//                debugger
//                this.customer = customerData;
//                console.log(customerData);
//            })
//        })
//    }

//    onBack() {
//        this.router.navigate(['pos-dashboard/customers']);
//    }


//}