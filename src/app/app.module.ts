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
import { InventoryItemService } from './Service/Inventory/InventoryItem.service';
import { InventoryIssueService } from './Service/Inventory/InventoryIssue.service';
import { InventoryReceiptDetailsService } from './Service/Inventory/InventoryReceiptDetails.service';
import { MenuConsumptionService } from './Service/Inventory/MenuConsumptionService';
import { PeriodicConsumptionService } from './Service/Inventory/periodic-consumption.service';
import { RoomService } from './Service/Inventory/room.service';
import { AccountTransactionTypeService } from './Service/Inventory/account-trans-type.service';
import { InventoryReceiptService } from './Service/Inventory/InventoryReceipt.service';
import { PeriodicConsumptionItemService } from './Service/Inventory/peroidic-consumption-item.service';
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
// import { TicketService } from './Service/Billing/ticket.service';
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
    //InventoryComponents
    CategoryComponent,
    InventoryDashboardComponent,
    InventoryItemComponent,
    StockInHandComponent,
    InventoryReceiptComponent,
    InventoryReceiptDetailsComponent,
    PeriodicConsumptionComponent,
    StockDamageComponent,
    StockDamageDetailsComponent,
    // UnitTypeComponent,
    WareHouseComponent,
    WareHouseTypeComponent,

    
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
    AccountTransactionTypeService,
    
    CategoryService,
    InventoryItemService,
    InventoryIssueService,
    InventoryReceiptService,
    InventoryReceiptDetailsService,
    MenuConsumptionService,
    PeriodicConsumptionItemService,
    PeriodicConsumptionService,
    RoomService,
    // TicketService,
    // UserService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
