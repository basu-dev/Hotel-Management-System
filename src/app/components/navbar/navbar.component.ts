import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthenticationService } from 'src/app/Service/authentication.service';
import {Store} from "@ngrx/store";
import * as authReducer from "../../reducers/auth.reducer";
import * as authAction from "../../actions/auth.action"
import { Observable } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService:AuthenticationService,
    public store:Store<{auth:authReducer.State}>
    ) { }
  public authenticated:boolean;
  ngOnInit() {
    this.store.subscribe(data=>this.authenticated=data.auth.IsAuthenticated)
      console.log("from navbar:"+this.authenticated)
    }
 logout(){
  this.authService.logout()
 }
  }


