import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TestComponent } from './components/test/test.component';

import { AuthGuard } from './guard/auth.guard';

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
import { TableComponent } from './components/POS-System/Table/table.component';
import { POSDashboardComponent } from './components/POS-System/pos-dashboard/pos-dashboard.component';
import { UserComponent } from './components/ManageDashboard/user/user.component';
import { RoleModuleComponent } from './components/ManageDashboard/rolemodule/rolemodule.component';
import { RoleComponent } from './components/ManageDashboard/role/role.component';
import { RoleAssignmentComponent } from './components/ManageDashboard/role-assign/role-assign.component';
import { CompanyComponent } from './components/ManageDashboard/company/company.component';
import { FinancialYearComponent } from './components/ManageDashboard/FinancialYear/FinancialYear.component';
import { DepartmentComponent } from './components/ManageDashboard/Department/Department.component';
import { RoomComponent } from './components/Reservation/room/room.component';
import { InventoryItemComponent } from './components/InventoryDashboard/inventory/inventory-item.component';
import { CategoryComponent } from './components/InventoryDashboard/category/category.component';
import { UnitTypeComponent } from './components/InventoryDashboard/UnitType/UnitType.Component';
import { InventoryReceiptComponent } from './components/InventoryDashboard/inventory-receipt/inventory-receipt.component';
import { PeriodicConsumptionComponent } from './components/InventoryDashboard/periodic-consumption/periodic-consumption.component';
import { StockDamageComponent } from './components/InventoryDashboard/stock-damage/stock-damage.component';
import { WareHousesComponent } from './components/InventoryDashboard/WareHouse/WareHouse';
import { WareHouseComponent } from './components/InventoryDashboard/WareHouse/warehouse.component';
import { StockInHandComponent } from './components/InventoryDashboard/inventory report/stock-in-hand.component';
import { WareHouseTypeComponent } from './components/InventoryDashboard/WareHouse/warehousetype.component';
import { ContraComponent } from './components/Accounts/contra/contra.component';
import { SalesDetailComponent } from './components/Accounts/sales/sales-detail/salesDetail.component';
import { SalesComponent } from './components/Accounts/sales/sales.component';
import { ReceiptComponent } from './components/Accounts/receipt/receipt.component';


const routes: Routes = [
  { path: '', redirectTo: "/test", pathMatch: 'full' },
  { path: "login", component: LoginComponent, canActivate: [AuthGuard] },
  { path: "user", component: UserComponent },






  { path: "test", component: TestComponent },
  { path: "reservation", component: ReservationComponent, canActivate: [AuthGuard] },
  { path: "reservation/checkin", component: CheckInComponent, canActivate: [AuthGuard] },
  { path: "reservation/reservationstatus", component: RoomStatusComponent, canActivate: [AuthGuard] },
  { path: "reservation/checkout", component: CheckOutComponent, canActivate: [AuthGuard] },
  { path: "reservation/reservationinquiry", component: ReservationInquiryComponent, canActivate: [AuthGuard] },
  { path: "reservation/customer", component: ReservationCustomerComponent, canActivate: [AuthGuard] },
  { path: "reservation/payment", component: PaymentTypeComponent, canActivate: [AuthGuard] },
  { path: "reservation/roomtype", component: RoomTypeComponent, canActivate: [AuthGuard] },
  { path: "reservation/facility", component: FacilityComponent, canActivate: [AuthGuard] },
  { path: "reservation/roomtype", component: RoomTypeComponent, canActivate: [AuthGuard] },
  { path: "reservation/room", component: RoomComponent, canActivate: [AuthGuard] },
  { path: "reservation/customertypes", component: CustomerTypeComponent, canActivate: [AuthGuard] },
  {
    path: 'pos-dashboard/:tabName',
    component: POSDashboardComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  { path: "reservation/reservationtype", component: ReservationTypeComponent, canActivate: [AuthGuard] },
  { path: "billing/order", component: TableComponent, canActivate: [AuthGuard] },
  {
    path: 'managedashboard/rolemodule',
    component: RoleModuleComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'managedashboard/role',
    component: RoleComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'managedashboard/userRole',
    component: RoleAssignmentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'managedashboard/company',
    component: CompanyComponent,
    pathMatch: 'full', canActivate: [AuthGuard]
  },


  {
    path: 'nav',
    component: NavbarComponent,
    pathMatch: 'full', canActivate: [AuthGuard]
  },
  {
    path: 'managedashboard/financial',
    component: FinancialYearComponent,
    pathMatch: 'full', canActivate: [AuthGuard]
  },
  {
    path: 'managedashboard/department',
    component: DepartmentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Inventory/inventory',
    component: InventoryItemComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Inventory/category',
    component: CategoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Inventory/unittype',
    component: UnitTypeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Inventory/inventory-receipt',
    component: InventoryReceiptComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Inventory/consumption',
    component: PeriodicConsumptionComponent, canActivate: [AuthGuard]
  },
  {
    path: 'Inventory/stock-damage',
    component: StockDamageComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'Inventory/warehouses',
    component: WareHouseComponent, canActivate: [AuthGuard]
  },
  {
    path: 'Inventory/WareHouse',
    component: WareHouseComponent, canActivate: [AuthGuard]
  },
  {
    path: 'Inventory/stockinhand',
    component: StockInHandComponent, canActivate: [AuthGuard]
  },
  {
    path: 'Inventory/WareHouseType',
    component: WareHouseTypeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Account/Bankcash',
    component: ContraComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Account/receipt',
    component: ReceiptComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Account/sales',
    component: SalesComponent,
    canActivate: [AuthGuard],
    children:[
      {path:'detail/:id',
      component:SalesDetailComponent,
      canActivate:[AuthGuard]
    }
    ]
  },

  { path: "404", component: PagenotfoundComponent },
  {
    path: '**',
    redirectTo: "/404",
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
