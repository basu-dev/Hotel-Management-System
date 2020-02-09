export const navcomponents=[
    {
      title: 'Front Office',
      icon: 'layout-outline',
      children: [
        {
        
          title: 'Booking',
          icon: 'fa fa-circle',
          children: [

            {
              title: 'Booking',
              link: 'reservation',
            },
            {
              title: 'Check-in',
              link: 'reservation/checkin',
            },
            {
              title: 'Room Status',
              link: 'reservation/reservationstatus',
            },
            {
              title: 'Check-Out',
              link: 'reservation/checkout',
            },
           
            {
              title: 'Inquiry',
              link: 'reservation/reservationinquiry',
            },
            {
              title: 'Customer',
              link: 'reservation/customer',
            }
                     
          ]
        },
        {
          title: 'Master Setup',
          icon: 'home-outline',
          children: [
            {
              title: 'Payment',
              link: 'reservation/payment',
            },
            {
              title: 'Facility',
              link: 'reservation/facility',
            },
            {
              title: 'Room Types',
              link: 'reservation/roomtype',
            },
            {
              title: 'Customer',
              link: 'reservation/customertypes',
            },
            {
              title: 'Reservation',
              link: 'reservation/reservationtype',
            },
            {
              title: 'Rooms Setup',
              link: 'reservation/room',
            },
          ]
        },
      ],
    }, 
    {
      title: 'POS',
      group: true,
     
    }, 
    {
      title: 'Billing',
      icon: 'shopping-cart-outline',
      children: [
        {
          title: 'Order',
          link: '/pages/forms/inputs',
          home: true,
        },
        
        {
          title: 'Customer',
          link: 'reservation/customertype',
        },
        {
          title: 'Billing',
          link: '/pages/forms/buttons',
        },
        {
          title: 'Menu',
          icon: 'layout-outline',
          children: [
            {
              title: 'Item',
              link: '/pages/layout/stepper',
            },
            {
              title: 'Category',
              link: '/pages/layout/list',
            },
            {
              title: 'Consumption',
              link: '/pages/layout/infinite-list',
            },
            {
              title: 'Menu',
              link: '/pages/layout/accordion',
            },
            {
              title: 'Table and Room Design',
              pathMatch: 'prefix',
              link: '/pages/layout/tabs',
            },
          ],
        },
      ],    
    },
    {
      title: 'Account / Finance',
      group: true,
    },
    {
      title: 'Transaction',
      icon: 'edit-2-outline',
      children: [
        {
          title: 'Bank/Cash',
          link: 'Account/contra',
        },
        {
          title: 'Sales',
          link: 'Account/sales',
        },
        {
          title: 'Receipt',
          link: 'Account/receipt',
        },
        {
          title: 'Purchase',
          link: 'Account/purchase',
        },
        {
          title: 'Payment',
          link: 'Account/payment',
        },
        {
          title: 'Journal',
          link: 'Account/journalVoucher',
        },
        {
          title: 'Debit Note',
          link: 'Account/debit-note',
        },
        {
          title: 'Credit Note',
          link: 'Account/credit-note',
        },      
      ],
    },
    {
      title: 'Report',
      icon: 'keypad-outline',
      link: '/pages/ui-features',
      children: [
        {
          title: 'Account',
          icon: 'grid-outline',
          children:[
            {
              title: 'Day Book',
              link: 'Account/journalVoucher',
            },
            {
              title: 'Ledger',
              link: 'Account/accountLedgerView',
            },
            {
              title: 'Trial Balance',
              link: 'Account/TrialBalance',
            },
            {
              title: 'Profit & Loss',
              link: 'Account/ProfitLoss',
            },
            {
              title: 'Balance Sheet',
              link: 'Account/BalanceSheet',
            },
            {
              title: 'Cash Flow',
              link: 'Account/journalVoucher',
            },
            {
              title: 'Fund Flow',
              link: 'Account/journalVoucher',
            },
          ],
        },
        {
          title: 'Sale / Purchase',
          icon: 'grid-outline',
          children:[
            {
              title: 'Sales Book',
              link: 'Account/SaleBook',
            },
            {
              title: 'Item Wise',
              link: 'Account/SaleItemWise',
            },
            {
              title: 'Date Wise',
              link: 'Account/SaleDateWise',
            },
            {
              title: 'Customer',
              link: 'Account/SaleCustomerWise',
            },
          ],
        },
        {
          title: 'Miscellaneous',
          icon: 'grid-outline',
          children:[
            {
              title: 'Purchase Book',
              link: 'Account/PurchaseBook',
            },
            {
              title: 'Materialized View',
              link: 'Account/MaterializedView',
            },
            {
              title: 'Bill Return View',
              link: 'Account/BillReturnView',
            },
          ],
        },      
       
      ],
    },
    {
      title: 'Master',
      icon: 'layout-outline',
      children: [
        {
          title: 'Ledger',
          link: 'Account/account',
        },
        {
          title: 'Group Ledger',
          link: 'Account/accountType',
        },
        {
          title: 'Transaction Type',
          link: 'Account/accounttransType',
        },
      ],
    },  
    {
      title: 'Inventory',
      group: true,
    }, 
    {
      title: 'Transaction',
      icon: 'edit-2-outline',
      children: [
        {
          title: 'Receipt',
          link: 'Inventory/inventory-receipt',
        },
        {
          title: 'Consumption',
          link: 'Inventory/consumption',
        },
        {
          title: 'Stock Damage',
          link: 'Inventory/stock-damage',
        },
      ],
    },
    {
      title: 'Report',
      icon: 'keypad-outline',
      children: [
        {
          title: 'Stockin-hand',
          link: 'Inventory/stockinhand',
        },
      ],
    },   
    {
      title: 'Master',
      icon: 'browser-outline',
      children: [
        {
          title: 'Item',
          link: 'Inventory/inventory',
        },
        {
          title: 'Category',
          link: 'Inventory/category',
        },
        {
          title: 'Unit Type',
          link: 'Inventory/unittype',
        },      
      ],
    },
    {
      title: 'Warehouse',
      icon: 'browser-outline',
      children: [
        {
          title: 'Warehouses',
          link: 'Inventory/warehouses',
        },
        {
          title: 'Warehouse Type',
          link: 'Inventory/WareHouseType',
        },
      ],
    },

    {
      title: 'User Management',
      group: true,
      
    }, 
    {
      title: 'Manage',
      icon: 'lock-outline',
      children: [
        {
          title: 'User',
          icon: 'lock-outline',
          children: [
            {
              title: 'Login',
              link: 'login',
            },
            {
              title: 'Users',
              link: '/user',
            },
            {
              title: 'Roles',
              link: '/managedashboard/role',
            },
            {
              title: 'Role Module',
              link: '/managedashboard/rolemodule',
            },
            {
              title: 'User Roles',
              link: '/managedashboard/userRole',
            },
          ],
        },
        {
          title: 'Management',
          icon: 'home-outline',
          children: [
            {
              title: 'Department',
              link: '/managedashboard/department',
            },
            {
              title: 'Financial Year',
              link: '/managedashboard/financial',
            },
            {
              title: 'Company',
              link: '/managedashboard/company',
            },
          ],
        },      
      ],
    },
  ];