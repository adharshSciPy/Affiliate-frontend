import Dashboard from "../assets/sidebar-icons/home.png"
import Service from "../assets/sidebar-icons/technical-service.png"
import Affiliate from "../assets/sidebar-icons/connection.png"
import Customer from "../assets/sidebar-icons/customer.png"
import Setting from "../assets/sidebar-icons/settings.png"
import Offers from "../assets/sidebar-icons/sidebaricon6.png"
import OurService from "../assets/sidebar-icons/sidebaricon7.png"
import Billing from "../assets/sidebar-icons/sidebaricon8.png"
import Coupons from "../assets/sidebar-icons/sidebaricon9.png"
import Commissions from "../assets/sidebar-icons/sidebaricon10.png"
import Transaction from "../assets/sidebar-icons/sidebaricon10.png"

const adminSidebarRoutes = [
    {
        icon: Dashboard,
        title: 'Dashboard',
        path: '/admin/home',
    },
    {
        icon: Service,
        title: 'Service Providers',
        path: false,
        children: [
            {
                title: 'Active Companies',
                path: '#',
            },
            {
                title: 'Verifications',
                path: '#',
            },
            {
                title: 'Payments',
                path: '#',
            }
        ]
    },
    {
        icon: Affiliate,
        title: 'Affilaters',
        path: false,
        children: [
            {
                title: 'Active Members',
                path: '#',
            },
            {
                title: 'Verifications',
                path: '#',
            },
            {
                title: 'Coupons',
                path: '#',
            },
            {
                title: 'Payments',
                path: '#',
            }
        ]
    },
    {
        icon: Customer,
        title: 'Customers',
        path: false,
        children: [
            {
                title: 'Active Members',
                path: '#',
            },
            {
                title: 'Verifications',
                path: '#',
            }
        ]
    },
    {
        icon: Setting,
        title: 'Settings',
        path: '#',
    }
]

const companySidebarRoutes = [
    {
        icon: Dashboard,
        title: 'Dashboard',
        path: '/admin/home',
    },
    {
        icon: Offers,
        title: 'Offers & Discounts',
        path: false,
        children: [
            {
                title: '',
                path: '#',
            },
            {
                title: '',
                path: '#',
            },
            {
                title: '',
                path: '#',
            }
        ]
    },
    {
        icon: OurService,
        title: 'Our Services',
        path: false,
        children: [
            {
                title: '',
                path: '#',
            },
            {
                title: '',
                path: '#',
            },
            {
                title: '',
                path: '#',
            },
            {
                title: '',
                path: '#',
            }
        ]
    },
    {
        icon: Billing,
        title: 'CRM & Billing',
        path: false,
        children: [
            {
                title: '',
                path: '#',
            },
            {
                title: '',
                path: '#',
            }
        ]
    },
    {
        icon: Setting,
        title: 'Settings',
        path: '#',
    }
]

const affiliateSidebarRoutes = [
    {
        icon: Dashboard,
        title: 'Dashboard',
        path: '/affiliater/home',
    },
    {
        icon: Coupons,
        title: 'Coupons',
        path: false,
        children: [
            {
                title: '',
                path: '#',
            },
            {
                title: '',
                path: '#',
            },
            {
                title: '',
                path: '#',
            }
        ]
    },
    {
        icon: Commissions,
        title: 'Commission',
        path: false,
        children: [
            {
                title: '',
                path: '#',
            },
            {
                title: '',
                path: '#',
            },
            {
                title: '',
                path: '#',
            },
            {
                title: '',
                path: '#',
            }
        ]
    },
    {
        icon: Transaction,
        title: 'Transactions',
        path: false,
        children: [
            {
                title: '',
                path: '#',
            },
            {
                title: '',
                path: '#',
            }
        ]
    },
    {
        icon: 'ST',
        title: 'Settings',
        path: '#',
    }
]


export { adminSidebarRoutes, companySidebarRoutes, affiliateSidebarRoutes }