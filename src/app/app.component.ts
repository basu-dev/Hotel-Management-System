import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './Service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'DCubeHotelAngular'
ngOnInit(){
  if(this.authService.isAuthenticated()){
    this.authService.authenticate();
  }
}
  constructor(public authService:AuthenticationService) {}


}
