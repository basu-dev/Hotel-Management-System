import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TestComponent } from './components/test/test.component';
import { DashboardComponent } from './components/Dashboard/dashboard.component';


const routes: Routes = [
  {path:'',redirectTo:"/login",pathMatch:'full'},
  {path:"login",component:LoginComponent},
  {path:"test",component:TestComponent},
  {path:"dashboard",component:DashboardComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
