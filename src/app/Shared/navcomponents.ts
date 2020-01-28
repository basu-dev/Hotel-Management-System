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
              title: 'Guest Status',
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
            },          
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
              title: 'Room',
              link: 'reservation/roomtype',
            },
            {
              title: 'Customer',
              link: 'reservation/customertype',
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
          link: '/pages/forms/layouts',
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
          link: '/pages/forms/inputs',
        },
        {
          title: 'Sales',
          link: '/pages/forms/layouts',
        },
        {
          title: 'Receipt',
          link: '/pages/forms/buttons',
        },
        {
          title: 'Purchase',
          link: '/pages/forms/datepicker',
        },
        {
          title: 'Payment',
          link: '/pages/forms/datepicker',
        },
        {
          title: 'Journal',
          link: '/pages/forms/datepicker',
        },
        {
          title: 'Debit Note',
          link: '/pages/forms/datepicker',
        },
        {
          title: 'Credit Note',
          link: '/pages/forms/datepicker',
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
              link: '/pages/ui-features/grid',
            },
            {
              title: 'Ledger',
              link: '/pages/ui-features/grid',
            },
            {
              title: 'Trial Balance',
              link: '/pages/ui-features/grid',
            },
            {
              title: 'Profit & Loss',
              link: '/pages/ui-features/grid',
            },
            {
              title: 'Balance Sheet',
              link: '/pages/ui-features/grid',
            },
            {
              title: 'Cash Flow',
              link: '/pages/ui-features/grid',
            },
            {
              title: 'Fund Flow',
              link: '/pages/ui-features/grid',
            },
          ],
        },
        {
          title: 'Sale / Purchase',
          icon: 'grid-outline',
          children:[
            {
              title: 'Sales Book',
              link: '/pages/ui-features/typography',
            },
            {
              title: 'Item Wise',
              link: '/pages/ui-features/typography',
            },
            {
              title: 'Date Wise',
              link: '/pages/ui-features/typography',
            },
            {
              title: 'Customer',
              link: '/pages/ui-features/typography',
            },
          ],
        },
        {
          title: 'Miscellaneous',
          icon: 'grid-outline',
          children:[
            {
              title: 'Purchase Book',
              link: '/pages/ui-features/typography',
            },
            {
              title: 'Materialized View',
              link: '/pages/ui-features/typography',
            },
            {
              title: 'Bill Return View',
              link: '/pages/ui-features/typography',
            },
          ],
        },      
        // {
        //   title: 'Animated Searches',
        //   link: '/pages/ui-features/search-fields',
        // },
      ],
    },
    {
      title: 'Master',
      icon: 'layout-outline',
      children: [
        {
          title: 'Ledger',
          link: '/pages/layout/stepper',
        },
        {
          title: 'Group Ledger',
          link: '/pages/layout/list',
        },
        {
          title: 'Transaction Type',
          link: '/pages/layout/infinite-list',
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
          link: '/pages/modal-overlays/dialog',
        },
        {
          title: 'Consumption',
          link: '/pages/modal-overlays/window',
        },
        {
          title: 'Stock Damage',
          link: '/pages/modal-overlays/popover',
        },
      ],
    },
    {
      title: 'Report',
      icon: 'keypad-outline',
      children: [
        {
          title: 'Stock=in-hand',
          link: '/pages/modal-overlays/toastr',
        },
      ],
    },   
    {
      title: 'Master',
      icon: 'browser-outline',
      children: [
        {
          title: 'Item',
          link: '/pages/modal-overlays/toastr',
        },
        {
          title: 'Category',
          link: '/pages/modal-overlays/tooltip',
        },
        {
          title: 'Unit Type',
          link: '/pages/modal-overlays/tooltip',
        },      
      ],
    },
    {
      title: 'Warehouse',
      icon: 'browser-outline',
      children: [
        {
          title: 'Warehouses',
          link: '/pages/modal-overlays/toastr',
        },
        {
          title: 'Warehouse Type',
          link: '/pages/modal-overlays/tooltip',
        },
      ],
    },
    // {
    //   title: 'Extra Components',
    //   icon: 'message-circle-outline',
    //   children: [
    //     {
    //       title: 'Calendar',
    //       link: '/pages/extra-components/calendar',
    //     },
    //     {
    //       title: 'Progress Bar',
    //       link: '/pages/extra-components/progress-bar',
    //     },
    //     {
    //       title: 'Spinner',
    //       link: '/pages/extra-components/spinner',
    //     },
    //     {
    //       title: 'Alert',
    //       link: '/pages/extra-components/alert',
    //     },
    //     {
    //       title: 'Calendar Kit',
    //       link: '/pages/extra-components/calendar-kit',
    //     },
    //     {
    //       title: 'Chat',
    //       link: '/pages/extra-components/chat',
    //     },
    //   ],
    // },
    // {
    //   title: 'Maps',
    //   icon: 'map-outline',
    //   children: [
    //     {
    //       title: 'Google Maps',
    //       link: '/pages/maps/gmaps',
    //     },
    //     {
    //       title: 'Leaflet Maps',
    //       link: '/pages/maps/leaflet',
    //     },
    //     {
    //       title: 'Bubble Maps',
    //       link: '/pages/maps/bubble',
    //     },
    //     {
    //       title: 'Search Maps',
    //       link: '/pages/maps/searchmap',
    //     },
    //   ],
    // },
    // {
    //   title: 'Charts',
    //   icon: 'pie-chart-outline',
    //   children: [
    //     {
    //       title: 'Echarts',
    //       link: '/pages/charts/echarts',
    //     },
    //     {
    //       title: 'Charts.js',
    //       link: '/pages/charts/chartjs',
    //     },
    //     {
    //       title: 'D3',
    //       link: '/pages/charts/d3',
    //     },
    //   ],
    // },
    // {
    //   title: 'Editors',
    //   icon: 'text-outline',
    //   children: [
    //     {
    //       title: 'TinyMCE',
    //       link: '/pages/editors/tinymce',
    //     },
    //     {
    //       title: 'CKEditor',
    //       link: '/pages/editors/ckeditor',
    //     },
    //   ],
    // },
    // {
    //   title: 'Tables & Data',
    //   icon: 'grid-outline',
    //   children: [
    //     {
    //       title: 'Smart Table',
    //       link: '/pages/tables/smart-table',
    //     },
    //     {
    //       title: 'Tree Grid',
    //       link: '/pages/tables/tree-grid',
    //     },
    //   ],
    // },
    // {
    //   title: 'Miscellaneous',
    //   icon: 'shuffle-2-outline',
    //   children: [
    //     {
    //       title: '404',
    //       link: '/pages/miscellaneous/404',
    //     },
    //   ],
    // },
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