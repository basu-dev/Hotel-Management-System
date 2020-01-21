import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TestComponent } from './components/test/test.component';

import { AuthGuard } from './guard/auth.guard';

import { AccountDashboardComponent } from './components/AccountDashboard/AccountDashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { CheckInComponent } from './components/checkin/checkin.component';


const routes: Routes = [
{path:'',redirectTo:"/test",pathMatch:'full'},
{path:"login",component:LoginComponent, canActivate:[AuthGuard]},
{path:"test",component:TestComponent},
//  {path:"checkin",component:CheckInComponent, canActivate:[AuthGuard]},


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
