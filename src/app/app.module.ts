import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import{FormsModule, ReactiveFormsModule}from '@angular/forms'
import { AuthenticationService } from './Service/authentication.service';
import { DepartmentService } from './Service/Department.service';
import { LoginService } from './Service/login.service';
import { UsersService } from './Service/user.service';
import { DashboardNavigationComponent } from './components/Dashboard-Nav/DashboardNavigation.component';
import { DashboardComponent } from './components/Dashboard/dashboard.component';
import { ReservationDashboardComponent } from './components/ReservationDashboard/ReservationDashboard.component';
import { ReservationDashboardNavComponent } from './components/ReservationDashboardNav/ReservationDashboardNav.component';
import { AccountDashboardComponent } from './components/AccountDashboard/AccountDashboard.component';
import { JournalVoucherService } from './Service/journalVoucher.service';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TestComponent } from './components/test/test.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import{navcomponents} from "./Shared/navcomponents";

@NgModule({
  declarations: [

    AppComponent,
    LoginComponent,
    DashboardNavigationComponent,
    DashboardComponent,
    ReservationDashboardComponent,
    ReservationDashboardNavComponent,
    AccountDashboardComponent,
    HeaderComponent,
    NavbarComponent,
    NavbarComponent,
    TestComponent,
    PagenotfoundComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: 'NAVCOMPONENTS', useValue: navcomponents }   ,
    AuthenticationService,
        DepartmentService,
        LoginService,
        UsersService,
        JournalVoucherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
