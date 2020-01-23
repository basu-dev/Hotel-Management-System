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
import {FileService} from "./Service/file.service";
//  import {TimepickerModule} from "node_modules/ngx-bootstrap";
 import {BsModalModule} from "ng2-bs3-modal";
 import {DatePipe} from "@angular/common";
  import {AngularDateTimePickerModule} from "angular2-datetimepicker";
 import {BsDatepickerModule} from "node_modules/ngx-bootstrap";
//  import { DateTimePickerModule} from "ng2-datetimepicker";
import { RoomStatusComponent} from "./components/Reservation/reservation-status/Reservationstatus.component"
import { ReservationComponent } from './components/Reservation/reservation.component';
import { CheckOutComponent } from './components/Reservation/checkout/checkout.component';
import { ReservationInquiryComponent } from './components/Reservation/ReservationInquiry/ReservationInquiry.component';
import { ReservationCustomerComponent } from './components/Reservation/customer/customer.component';
import { PaymentTypeComponent } from './components/Reservation/payment-type/payment-type.component';
import { FacilityComponent } from './components/Reservation/facility/facility.component';
import { ReservationTypeComponent } from './components/Reservation/reservation-type/reservation-type.component';
import { RoomTypeComponent } from './components/Reservation/room-type/room-type.component';
import { CustomerTypeComponent } from './components/Reservation/customer-type/customer-type.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { TableComponent } from './components/POS-System/Table/table.component';
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
    FileUploadComponent,
    RoomStatusComponent,
    ReservationComponent,
    CheckOutComponent,
    ReservationInquiryComponent,
    ReservationCustomerComponent,
    PaymentTypeComponent,
    FacilityComponent,
    ReservationTypeComponent,
    RoomTypeComponent,
    CustomerTypeComponent,
    TableComponent,
    
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
    //  TimepickerModule.forRoot(),
     BsModalModule,
      AngularDateTimePickerModule,
      StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
      EffectsModule.forRoot([AppEffects])
  ],
  providers: [
    { provide: 'NAVCOMPONENTS', useValue: navcomponents }   ,
    AuthenticationService,
    ReservationTypeService,
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
    DatePipe,
    FileService,
    ReservationCustomerService,
    PaymentTypeService,
    FacilityService,
    ReservationTypeService,
    RoomTypeService,
    CustomerTypeService
    
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
