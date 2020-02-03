import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { map } from 'rxjs/operators';
import { stringify } from 'querystring';
import { FormBuilder } from '@angular/forms';
import {Global} from "../../Shared/global";
import { ReservationService } from 'src/app/Service/reservation/reservation.services';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
public items:[];
  constructor(public http:HttpClient,public fb:FormBuilder,public _reservationService:ReservationService) { }
  
public showNav(){
  console.log(this.items);

}

  ngOnInit() {

  }
showData(){
  let customers = this._reservationService.get(Global.BASE_RESERVATION_CUSTOMER_ENDPOINT).subscribe(

    data=>console.log("data: "+data),
    error=>console.log("error: "+error)
  );

  
  console.log(Global.BASE_RESERVATION_CUSTOMER_ENDPOINT);

} 
}