import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import{FormsModule, ReactiveFormsModule}from '@angular/forms'
import { AuthenticationService } from './Service/authentication.service';
import { DepartmentService } from './Service/Department.service';
import { LoginService } from './Service/login.service';
import { UsersService } from './Service/user.service';  


import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TestComponent } from './components/test/test.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import{navcomponents} from "./Shared/navcomponents";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckInComponent } from './components/checkin/checkin.component';
import {CustomerTypeService} from "./Service/reservation/customer-type.services";
import {FacilityService} from "./Service/reservation/facility.services";
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
import { CategoryService } from './Service/Billing/category.service';
import { ProductService } from './Service/Billing/product.service';
import { TableStoreService } from './Service/Billing/table.store.service';
// import { UserService } from './Service/Billing/user.service';
import { CustomerService } from './Service/Billing/customer.service';
import { OrderService } from './Service/Billing/Order.service';
import { OrderStoreService } from './Service/Billing/order.store.service';
import { tableService } from './Service/Billing/table.service';
import { CustomerStoreService } from './Service/Billing/customer.store.service';
import { POSDashboardComponent } from './components/POS-System/pos-dashboard/pos-dashboard.component';
import { UserComponent } from './components/ManageDashboard/user/user.component';
import { DepartmentComponent } from './components/ManageDashboard/Department/Department.component';
import { FinancialYearComponent } from './components/ManageDashboard/FinancialYear/FinancialYear.component';
import { RoleComponent } from './components/ManageDashboard/role/role.component';
import { RoleAssignmentComponent } from './components/ManageDashboard/role-assign/role-assign.component';
import { RoleModuleComponent } from './components/ManageDashboard/rolemodule/rolemodule.component';
import { UserPermission } from './Model/User/userpermission';
import { UserPermissionComponent } from './components/ManageDashboard/user-permission/user-permission.component';
import { CompanyComponent } from './components/ManageDashboard/company/company.component';
import { UserRoleService } from './Service/userRole.service';
import { RoleService } from './Service/role.service';
import { RoleNameComponent } from './components/ManageDashboard/role-assign/role-name/role-name.component';
import { RoomComponent } from './components/Reservation/room/room.component';
import { AccountTransactionTypeService } from './Service/Inventory/account-trans-type.service';

import { CategoryComponent } from './components/InventoryDashboard/category/category.component';
import { InventoryDashboardComponent } from './components/InventoryDashboard/InventoryDashboard.Component';
import { StockInHandComponent } from './components/InventoryDashboard/inventory report/stock-in-hand.component';
import { InventoryReceiptDetailsComponent } from './components/InventoryDashboard/inventory-receipt/inventory-receiptdetails/inventory-receiptdetails.component';
import { UnitTypeComponent } from './components/InventoryDashboard/UnitType/UnitType.Component';
import { WareHouseComponent } from './components/InventoryDashboard/WareHouse/warehouse.component';
import { InventoryItemComponent } from './components/InventoryDashboard/inventory/inventory-item.component';
import { InventoryReceiptComponent } from './components/InventoryDashboard/inventory-receipt/inventory-receipt.component';
import { PeriodicConsumptionComponent } from './components/InventoryDashboard/periodic-consumption/periodic-consumption.component';
import { StockDamageComponent } from './components/InventoryDashboard/stock-damage/stock-damage.component';
import { StockDamageDetailsComponent } from './components/InventoryDashboard/stock-damage/stock-damage-details/stock-damage-details.component';
import { WareHouseTypeComponent } from './components/InventoryDashboard/WareHouse/warehousetype.component';
import { WareHousesComponent } from './components/InventoryDashboard/WareHouse/WareHouse';
import { TokenInterceptorService } from './interceptor/token-interceptor.service';
import { PeriodicConsumptionItemComponent } from './components/InventoryDashboard/periodic-consumption/periodic-consumption-items/periodic-consumption-item.component';
import { ContraComponent } from './components/Accounts/contra/contra.component';
import {SelectDropDownModule} from "ngx-select-dropdown";
import { SalesComponent } from './components/Accounts/sales/sales.component';
import { SalesDetailComponent } from './components/Accounts/sales/sales-detail/salesDetail.component';
import { ReceiptComponent } from './components/Accounts/receipt/receipt.component';

// import { TicketService } from './Service/Billing/ticket.service';
@NgModule({
  declarations: [

    AppComponent,
    LoginComponent,
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
    RoomComponent,
    PaymentTypeComponent,
    FacilityComponent,
    ReservationTypeComponent,
    RoomTypeComponent,
    CustomerTypeComponent,
    TableComponent,
    POSDashboardComponent,
    UserComponent,
    CompanyComponent,
    DepartmentComponent,
    FinancialYearComponent,
    RoleComponent,
    RoleAssignmentComponent,
    RoleModuleComponent,
    UserPermissionComponent,
    RoleNameComponent,
//INventoryComponents
    CategoryComponent,
    InventoryDashboardComponent,
    InventoryItemComponent,
    StockInHandComponent,
    InventoryReceiptComponent,
    InventoryReceiptDetailsComponent,
    PeriodicConsumptionComponent,
    StockDamageComponent,
    StockDamageDetailsComponent,
     UnitTypeComponent,
    WareHouseComponent,
    WareHouseTypeComponent,
    WareHousesComponent,
    PeriodicConsumptionItemComponent,
    ContraComponent,
    SalesComponent,
    SalesDetailComponent,
    ReceiptComponent
  ],
  imports: [
    SelectDropDownModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
     ModalModule.forRoot(),
     BsDatepickerModule.forRoot(),
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
    {provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true},
    AuthenticationService,
    ReservationTypeService,
    CustomerTypeService,
    FacilityService,
    PaymentTypeService,
    ReservationTypeService,
    AccountTransactionTypeService,
    RoomOccupiedService,
    RoomTypeService,
    DepartmentService,
    LoginService,
    UsersService,
    AccountTransactionTypeService
,
    DatePipe,
    FileService,
    AccountTransactionTypeService,
    PaymentTypeService,
    FacilityService,
    ReservationTypeService,
    RoomTypeService,
    CustomerTypeService,
    CategoryService,
    CustomerService,
    OrderService,
    OrderStoreService,
    ProductService,
    tableService,
    TableStoreService,
    CustomerStoreService,
    RoleService,
    UserRoleService,
    //InventoryServices
    // 
    // TicketService,
    // UserService,
    AccountTransactionTypeService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
