const adminSidebarRoutes = [
    {
        icon: 'DB',
        title: 'Dashboard',
        path: '/admin/home',
    },
    {
        icon: 'SP',
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
        icon: 'AF',
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
        icon: 'CT',
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
        icon: 'ST',
        title: 'Settings',
        path: '#',
    }
]

const companySidebarRoutes = [
    {
        icon: 'DB',
        title: 'Dashboard',
        path: '/admin/home',
    },
    {
        icon: 'OD',
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
        icon: 'OS',
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
        icon: 'CB',
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
        icon: 'ST',
        title: 'Settings',
        path: '#',
    }
]

const affiliateSidebarRoutes = [
    {
        icon: 'DB',
        title: 'Dashboard',
        path: '/admin/home',
    },
    {
        icon: 'CP',
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
        icon: 'CM',
        title: 'Comission',
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
        icon: 'TS',
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