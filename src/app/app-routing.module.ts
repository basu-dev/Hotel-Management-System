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
import { PurchaseComponent } from './components/Accounts/purchase/purchase.component';
import { PaymentComponent } from './components/Accounts/payment/payment.component';
import { DebitNoteComponent } from './components/Accounts/debit-note/debit-note.component';
import { CreditNoteComponent } from './components/Accounts/credit-note/cerdit-note.component';
import { JournalVouchercomponent } from './components/Accounts/journal/journaVoucher.component';
import { InventoryDashboardComponent } from './components/InventoryDashboard/InventoryDashboard.Component';
import { AccountTransactionTypeComponent } from './components/Accounts/account-transaction-type/account-transaction-type.component';
import { AccountComponent } from './components/Accounts/account/account.component';
import { AccountTypeComponent } from './components/Accounts/account-type/account-type.component';
import { MasterLedgerComponent } from './components/Accounts/master-ledger/master-ledger.component';
import { AccountProfitAndLossComponent } from './components/Report/ProfitAndLoss/AccountProfitAndLoss.Component';
import { TrialBalanceComponent } from './components/Report/TrialBalance/TrialBalance.component';
import { BalanceSheetComponent } from './components/Report/balance-sheet/balance-sheet.component';
import { AccountSaleBookItem } from './components/Report/SaleBookItem/AccountSaleBookItem.Component';
import { AccountSaleBookDaywise } from './components/Report/SaleBookDate/AccountSaleBookDatewise.Component';
import { AccountSaleBookCustomer } from './components/Report/SaleBookCustomer/AccountSaleBookCustomer.Component';
import { SalesBillingComponent } from './components/Accounts/sales-billing/sales-billing.component';
import { AccountLedgerViewComponent } from './components/Report/LedgerView/AccountLedgerView.Component';
import { MaterializedViewComponent } from './components/Report/materialized view/materializedview.component';
import { BillReturnViewComponent } from './components/Report/BillReturnView/BillReturnView.component';
import { POSDashboardComponent } from './components/POS-System/pos-dashboard/pos-dashboard.component';
import { MenuItemComponent } from './components/POS-System/Menu/MenuItem/MenuItem.component';
import { MenuComponent } from './components/POS-System/Menu/menu.component';
import { MenuCategoryComponent } from './components/POS-System/Menu/MenuCategory/MenuCategory.component';
import { MenuConsumptionComponent } from './components/POS-System/Menu/MenuConsumption/menu-consumption.component';
import { POSSaleBillingComponent } from './components/POS-System/pos-sale-billing/pos-sale-billing.component';
import { PosTableComponent } from './components/POS-System/pos-table/pos-table.component';
import { PosInvoicePrintComponent } from './components/POS-System/pos-table/pos-invoiceprint/pos-invoiceprint.component';
import { PosSettleComponent } from './components/POS-System/pos-table/pos-settle/pos-settle.component';
import { LoginGuard } from './guard/login.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: "/reservation",
    pathMatch: 'full'
  },

  {
    path: "login",
    component: LoginComponent,
    canActivate:[LoginGuard]
  },
  {
    path: "user",
    component: UserComponent
  },

  {
    path: "test",
    component: TestComponent
  },

  {
    path: "reservation",
    component: ReservationComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "reservation/checkin",
    component: CheckInComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "reservation/reservationstatus",
    component: RoomStatusComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "reservation/checkout",
    component: CheckOutComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "reservation/reservationinquiry",
    component: ReservationInquiryComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "reservation/customer",
    component: ReservationCustomerComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "reservation/payment",
    component: PaymentTypeComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "reservation/roomtype", component: RoomTypeComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "reservation/facility",
    component: FacilityComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "reservation/roomtype",
    component: RoomTypeComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "reservation/room",
    component: RoomComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "reservation/customertypes",
    component: CustomerTypeComponent,
    canActivate: [AuthGuard]
  },


  {
    path: "reservation/reservationtype",
    component: ReservationTypeComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "billing/order",
    component: TableComponent,
    canActivate: [AuthGuard]
  },

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
    component: WareHouseComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Inventory/WareHouse',
    component: WareHouseComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Inventory/stockinhand',
    component: StockInHandComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Inventory/WareHouseType',
    component: WareHouseTypeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Account',
    component: InventoryDashboardComponent,
    canActivate: [AuthGuard],

  },

  {
    path: 'Account/contra',
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
  },
  {
    path: 'Account/sales/detail/:id',
    component: SalesDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Account/purchase',
    component: PurchaseComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Account/payment',
    component: PaymentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Account/journalVoucher',
    component: JournalVouchercomponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Account/debit-note',
    component: DebitNoteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Account/credit-note',
    component: CreditNoteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Account/accounttransType',
    component: AccountTransactionTypeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Account/account',
    component: AccountComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Account/accountType',
    component: AccountTypeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Account/accountLedgerView',
    component: AccountLedgerViewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Account/TrialBalance',
    component: TrialBalanceComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Account/ProfitLoss',
    component: AccountProfitAndLossComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Account/BalanceSheet',
    component: BalanceSheetComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Account/SaleBook',
    component: SalesBillingComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Account/SaleItemWise',
    component: AccountSaleBookItem,
    canActivate: [AuthGuard]
  },
  {
    path: 'Account/SaleDateWise',
    component: AccountSaleBookDaywise,
    canActivate: [AuthGuard]
  },
  {
    path: 'Account/SaleCustomerWise',
    component: AccountSaleBookCustomer,
    canActivate: [AuthGuard]
  },
  {
    path: 'Account/PurchaseBook',
    component: SalesComponent
    ,
    canActivate: [AuthGuard]
  },
  {
    path: 'Account/MaterializedView',
    component: MaterializedViewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Account/BillReturnView',
    component: BillReturnViewComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'pos-dashboard/:tabName',
    component: POSDashboardComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'tables/:tableId',
    component: PosTableComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'pos/table/:tableId/empty-ticket',
    component: PosTableComponent,
    pathMatch: 'full', canActivate: [AuthGuard]
  },
  {
    path: 'table/:tableId/move/:ToOpenTicketId',
    component: PosTableComponent,
    pathMatch: 'full', canActivate: [AuthGuard]
  },
  {
    path: 'customer/:customerId/move/:ToOpenTicketId',
    component: PosTableComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'customer/:customerId',
    component: PosTableComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'table/:tableId/ticket/:ticketId',
    component: PosTableComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'customer/:customerId/ticket/:ticketId',
    component: PosTableComponent,

    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'order/move/:itemId',
    component: PosTableComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'pos/table/:tableId/empty-ticket',
    component: PosTableComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'pos/customer/:customerId/empty-ticket',
    component: PosTableComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'pos/settle',
    component: PosSettleComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'pos/InvoicePrint',
    component: PosInvoicePrintComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'pos-dashboard/table/items',
    component: MenuItemComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'pos-dashboard/table/menu',
    component: MenuComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'pos-dashboard/table/table',
    component: TableComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'pos-dashboard/table/category',
    component: CategoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'pos-dashboard/table/menuconsumption',
    component: MenuConsumptionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'pos-dashboard/table/posbilling',
    component: POSSaleBillingComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "**",
    component: PagenotfoundComponent
  },
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
