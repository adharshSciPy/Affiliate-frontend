const adminSidebarRoutes = [
    {
        icon: 'DB',
        title: 'Dashboard',
        path: '#',
    },
    {
        icon: 'SP',
        title: 'Service Providers',
        path: '#',
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
        path: '#',
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
        path: '#',
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

export { adminSidebarRoutes }