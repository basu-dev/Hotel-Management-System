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
import { AccountDashboardComponent } from './components/AccountDashboard/AccountDashboard.component';
import { JournalVoucherService } from './Service/journalVoucher.service';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TestComponent } from './components/test/test.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import{navcomponents} from "./Shared/navcomponents";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckInComponent } from './components/checkin/checkin.component';
import {CustomerTypeService} from "./Service/reservation/customer-type.services";
import {ReservationCustomerService} from "./Service/reservation/customer.services";
import {FacilityService} from "./Service/reservation/facility.services";
import {ReservationService} from "./Service/reservation/reservation.services";
import {RoomOccupiedService} from "./Service/reservation/room-occupied.services";
import {RoomTypeService} from "./Service/reservation/room-type.services";
import {PaymentTypeService} from "./Service/reservation/payment-type.services";
import {ReservationTypeService} from "./Service/reservation/reservation-type.services";
import { ModalModule } from 'node_modules/ngx-bootstrap/modal';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
 import {BsDatepickerModule} from "node_modules/ngx-bootstrap";
 import {TimepickerModule} from "node_modules/ngx-bootstrap";
 import {BsModalModule} from "ng2-bs3-modal";
 import {DatePipe} from "@angular/common";
 import {DateTimePickerModule} from "node_modules/ng2-datetimepicker/ngx-datetimepicker/src/app/datetimepicker.module";
@NgModule({
  declarations: [

    AppComponent,
    LoginComponent,
    AccountDashboardComponent,
    HeaderComponent,
    NavbarComponent,
    TestComponent,
    PagenotfoundComponent,
    CheckInComponent,
    FileUploadComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
     ModalModule.forRoot(),
     BsDatepickerModule.forRoot(),
     TimepickerModule.forRoot(),
     BsModalModule,
     DateTimePickerModule
  ],
  providers: [
    { provide: 'NAVCOMPONENTS', useValue: navcomponents }   ,
    AuthenticationService,
    CustomerTypeService,
    FacilityService,
    PaymentTypeService,
    ReservationTypeService,
    ReservationService,
    RoomOccupiedService,
    RoomTypeService,
    DepartmentService,
    LoginService,
    UsersService,
    JournalVoucherService,
    DatePipe
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
