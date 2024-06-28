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

const affiliateSidebarRoutes = [
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


export { adminSidebarRoutes, companySidebarRoutes, affiliateSidebarRoutes }