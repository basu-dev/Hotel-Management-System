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
import { TestComponent } from './components/test/test.component';
import { DashboardNavigationComponent } from './components/Dashboard-Nav/DashboardNavigation.component';
import { DashboardComponent } from './components/Dashboard/dashboard.component';

@NgModule({
  declarations: [

    AppComponent,
    LoginComponent,
    TestComponent,
    DashboardNavigationComponent,
    DashboardComponent

  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AuthenticationService,
        DepartmentService,
        LoginService,
        UsersService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
