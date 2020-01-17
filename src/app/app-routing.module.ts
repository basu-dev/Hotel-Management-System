import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TestComponent } from './components/test/test.component';
import { DashboardComponent } from './components/Dashboard/dashboard.component';
import { AuthGuard } from './guard/auth.guard';
import { ReservationDashboardNavComponent } from './components/ReservationDashboardNav/ReservationDashboardNav.component';
import { ReservationDashboardComponent } from './components/ReservationDashboard/ReservationDashboard.component';
import { AccountDashboardComponent } from './components/AccountDashboard/AccountDashboard.component';


const routes: Routes = [
  {path:'',redirectTo:"/dashboard",pathMatch:'full'},
  {path:"login",component:LoginComponent},
  {path:"test",component:TestComponent},
  {path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard]},
  {
    path: 'reservationdashboardnavcomponent',
    component: ReservationDashboardNavComponent,
    pathMatch: 'full', canActivate: [AuthGuard]
},
{
  path: 'reservationdashboard',
  component: ReservationDashboardComponent,
  pathMatch: 'full', canActivate: [AuthGuard]
},
{
  path: 'accountdashboard',
  component: AccountDashboardComponent,
  pathMatch: 'full', canActivate: [AuthGuard]
},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
