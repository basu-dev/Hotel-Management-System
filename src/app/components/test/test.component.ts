import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { map } from 'rxjs/operators';
import { stringify } from 'querystring';
import { FormBuilder } from '@angular/forms';

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
  this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(
    data=>console.log(data),
    error=>console.log(error)
  )

} 
}