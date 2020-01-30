import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { map } from 'rxjs/operators';
import { stringify } from 'querystring';
import { FormBuilder } from '@angular/forms';
import {Global} from "../../Shared/global";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
public items:[];
  constructor(public http:HttpClient,public fb:FormBuilder) { }
  
public showNav(){
  console.log(this.items);

}

  ngOnInit() {
     
  }
showData(){
  this.http.get(Global.BASE_HOST_ENDPOINT).subscribe(
    data=>console.log(data),
    error=>console.log(error)
  )
  console.log(Global.BASE_HOST_ENDPOINT);

} 
}