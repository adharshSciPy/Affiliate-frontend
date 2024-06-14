import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ConfigProvider, theme } from 'antd';
import { AdminLogin, CompanyRegister, LandingPage, Login, Regsiter } from './views'
import { AuthLayout, AdminLayout, CustomerLayout, AffiliateLayout } from './layout';

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
        children: [
            // auth routes
            {
                path: "auth",
                element: <AuthLayout />,
                children: [
                    {
                        path: "login",
                        element: <Login />
                    },
                    {
                        path: "register",
                        element: <Regsiter />
                    },
                    {
                        path: "admin-login",
                        element: <AdminLogin />
                    },
                    {
                        path: "company-register",
                        element: <CompanyRegister />
                    }
                ]
            },

            // admin routes
            {
                path: 'admin',
                element: <AdminLayout />,
                // children: []
            },

            // customer routes
            {
                path: 'customer',
                element: <CustomerLayout />,
                // children: []
            },

            // affiliater routes
            {
                path: 'affiliater',
                element: <AffiliateLayout />,
                // children: []
            },
        ],
    },
]);

const App = () => {

    return (
        <ConfigProvider
            theme={{
                // algorithm: mode === 'dark' && theme.darkAlgorithm,
                token: {
                    colorPrimary: '#39843B'
                }
            }}
        >
            <RouterProvider router={router} />

        </ConfigProvider>
    )
}

export default App