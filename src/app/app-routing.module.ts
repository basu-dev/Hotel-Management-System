import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TestComponent } from './components/test/test.component';

import { AuthGuard } from './guard/auth.guard';

import { AccountDashboardComponent } from './components/AccountDashboard/AccountDashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { CheckInComponent } from './components/checkin/checkin.component';
import { RoomStatusComponent } from './components/Reservation/reservation-status/Reservationstatus.component';
import { ReservationComponent } from './components/Reservation/reservation.component';
import { CheckOutComponent } from './components/Reservation/checkout/checkout.component';
import { ReservationInquiryComponent } from './components/Reservation/ReservationInquiry/ReservationInquiry.component';
import { ReservationCustomerComponent } from './components/Reservation/customer/customer.component';
import { PaymentTypeComponent } from './components/Reservation/payment-type/payment-type.component';
import { RoomTypeComponent } from './components/Reservation/room-type/room-type.component';
import { CustomerTypeComponent } from './components/Reservation/customer-type/customer-type.component';
import { FacilityComponent } from './components/Reservation/facility/facility.component';
import { ReservationTypeComponent } from './components/Reservation/reservation-type/reservation-type.component';


const routes: Routes = [
{path:'',redirectTo:"/test",pathMatch:'full'},
{path:"login",component:LoginComponent, canActivate:[AuthGuard]},
{path:"test",component:TestComponent},
{path:"reservation",component:ReservationComponent, canActivate:[AuthGuard]},

  {path:"reservation/checkin",component:CheckInComponent, canActivate:[AuthGuard]},
  {path:"reservation/reservationstatus",component:RoomStatusComponent, canActivate:[AuthGuard]},
  {path:"reservation/checkout",component:CheckOutComponent, canActivate:[AuthGuard]},
  {path:"reservation/reservationinquiry",component:ReservationInquiryComponent, canActivate:[AuthGuard]},
  {path:"reservation/customer",component:ReservationCustomerComponent, canActivate:[AuthGuard]},
  {path:"reservation/payment",component:PaymentTypeComponent, canActivate:[AuthGuard]},
  {path:"reservation/roomtype",component:RoomTypeComponent, canActivate:[AuthGuard]},
  {path:"reservation/facility",component:FacilityComponent, canActivate:[AuthGuard]},
  {path:"reservation/roomtype",component:RoomTypeComponent, canActivate:[AuthGuard]},
  {path:"reservation/room",component:RoomStatusComponent, canActivate:[AuthGuard]},
  {path:"reservation/customertype",component:CustomerTypeComponent, canActivate:[AuthGuard]},
  
  {path:"reservation/reservationtype",component:ReservationTypeComponent, canActivate:[AuthGuard]},


{
  path: 'nav',
  component: NavbarComponent,
  pathMatch: 'full', canActivate: [AuthGuard]
},
{path:'**',
component: PagenotfoundComponent,
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
