
// export const HTTPURL =  "http://192.168.1.4:8080/ticketapp/api/"; 
// export const FILEURL = "http://192.168.1.4:8080/ticketapp/"; 
export const HTTPURL =  'http://localhost/ticketapp/api/';
export const FILEURL = 'http://localhost/ticketapp/';
export const APIKEY = "97899c-7d0420-1273f0-901d29-84e2f8";


export const clientMenu = [
  {
    name: 'Dashboard',
    route: '/dashboard',
    icon: 'fa fa-tachometer-alt ',
    isActive: false
  },
  {
    name: 'Product',
    route: 'product',
    icon: 'fab fa-buffer',
    isActive: false,
    sub: [
      {
        name: 'View Products',
        route: '/clientproducts',
        icon: '',
        isActive: false
      },
      {
        name: 'My Product',
        route: '/productcart',
        icon: '',
        isActive: false
      }
    ]
  },
  {
    name: 'Ticket',
    route: 'ticket',
    icon: 'fa fa-ticket-alt',
    isActive: false,
    sub: [
      {
        name: 'Create Ticket',
        route: '/createticket',
        icon: '',
        isActive: false,
      },
      {
        name: 'List Tickets',
        route: '/tickets',
        icon: '',
        isActive: false,
      }
    ]
  },
  {
    name: 'Account',
    isDivider: true
  },
  {
    name: 'Profile',
    route: '/profile',
    icon: 'fas fa-user fa-fw ',
    isActive: false
  },
  {
    name: 'Change Password',
    route: '/changePassword',
    icon: 'fas fa-key',
    isActive: false
  },
];

export const adminMenu = [
  {
    name: 'Dashboard',
    route: '/dashboard',
    icon: 'fa fa-tachometer-alt',
    isActive: false
  },
  {
    name: 'Tickets',
    icon: 'fa fa-ticket-alt',
    isActive: false,
    sub: [
      {
        name: 'Create Ticket',
        route: '/createticket',
        icon: '',
        isActive: false,
      },
      {
        name: 'All Tickets',
        route: '/tickets',
        icon: '',
        isActive: false,
      }
    ]
  },
  {
    name: 'Clients',
    icon: 'fa fa-user-friends',
    isActive: false,
    sub: [
      {
        name: 'Add Clients',
        route: '/createclient',
        icon: '',
        isActive: false,
      },
      {
        name: 'All Clients',
        route: '/clients',
        icon: '',
        isActive: false,
      }
    ]
  },
  {
    name: 'Products',
    icon: 'fab fa-buffer',
    isActive: false,
    sub: [
      {
        name: 'Add Product',
        route: '/createproduct',
        icon: '',
        isActive: false,
      },
      {
        name: 'All Products',
        route: '/products',
        icon: '',
        isActive: false,
      }
    ]
  },
  {
    name: 'Account',
    isDivider: true
  },
  {
    name: 'Users',
    icon: 'fa fa-user-friends',
    isActive: false,
    sub: [
      {
        name: 'Users',
        route: '/users',
        icon: '',
        isActive: false,
      },
      {
        name: 'Administrators',
        route: '/admin',
        icon: '',
        isActive: false,
      }
    ]
  },
  {
    name: 'Profile',
    route: '/profile',
    icon: 'fas fa-user',
    isActive: false
  },
  {
    name: 'Change Password',
    route: '/changePassword',
    icon: 'fas fa-key',
    isActive: false
  },
];