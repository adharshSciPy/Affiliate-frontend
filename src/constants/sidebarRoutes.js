import sideIcon1 from '../assets/sidebar-icons/sidebaricon1.png';
import sideIcon2 from '../assets/sidebar-icons/sidebaricon2.png';
import sideIcon3 from '../assets/sidebar-icons/sidebaricon3.png';
import sideIcon4 from '../assets/sidebar-icons/sidebaricon4.png';
import sideIcon5 from '../assets/sidebar-icons/sidebaricon5.png';
import sideIcon6 from '../assets/sidebar-icons/sidebaricon6.png';
import sideIcon7 from '../assets/sidebar-icons/sidebaricon7.png';
import sideIcon8 from '../assets/sidebar-icons/sidebaricon8.png';
import sideIcon9 from '../assets/sidebar-icons/sidebaricon9.png';
import sideIcon10 from '../assets/sidebar-icons/sidebaricon10.png';
import sideIcon11 from '../assets/sidebar-icons/sidebaricon11.png';

const adminSidebarRoutes = [
    {
        icon: sideIcon1,
        title: 'Dashboard',
        path: '/admin/home',
    },
    {
        icon: sideIcon2,
        title: 'Service Providers',
        path: false,
        children: [
            {
                title: 'Active Companies',
                path: 'companies',
            },
            {
                title: 'Verifications',
                path: 'new-companies-request',
            },
            {
                title: 'Payments',
                path: 'company-payments',
            }
        ]
    },
    {
        icon: sideIcon3,
        title: 'Affilaters',
        path: false,
        children: [
            {
                title: 'Active Members',
                path: 'affiliaters',
            },
            {
                title: 'Verifications',
                path: 'new-affiliaters-request',
            },
            {
                title: 'Coupons',
                path: 'affiliater-tokens',
            },
            {
                title: 'Payments',
                path: 'affiliater-payments',
            }
        ]
    },
    {
        icon: sideIcon4,
        title: 'Customers',
        path: '/admin/customers',
    },
    {
        icon: sideIcon5,
        title: 'Settings',
        path: '#',
    }
]

const companySidebarRoutes = [
    {
        icon: sideIcon1,
        title: 'Dashboard',
        path: '/company/home',
    },
    {
        icon: sideIcon6,
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
        icon: sideIcon7,
        title: 'Our Services',
        path: false,
        children: [
            {
                title: 'Active  Courses',
                path: 'activecourses',
            },
            {
                title: 'Add Courses',
                path: 'addcourses',
            }

        ]
    },
    {
        icon: sideIcon8,
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
        icon: sideIcon5,
        title: 'Settings',
        path: '#',
    }
]

const affiliateSidebarRoutes = [
    {
        icon: sideIcon1,
        title: 'Dashboard',
        path: '/affiliater/home',
    },
    {
        icon: sideIcon9,
        title: 'Coupons',
        path: '/affiliater/coupons',
    },
    {
        icon: sideIcon10,
        title: 'Commission',
        path: '/affiliater/commission',
    },
    {
        icon: sideIcon11,
        title: 'Transactions',
        path: '/affiliater/transactions',
    },
    {
        icon: sideIcon5,
        title: 'Settings',
        path: '/affiliater/settings',
    }
]

export { adminSidebarRoutes, companySidebarRoutes, affiliateSidebarRoutes }