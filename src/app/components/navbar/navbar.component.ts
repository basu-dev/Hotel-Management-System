import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Service/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService:AuthenticationService) { }
public navdisplay:boolean=false;
  ngOnInit() {
    this.navdisplay=this.authService.isAuthenticated();
    console.log(this.navdisplay)
  }

}
