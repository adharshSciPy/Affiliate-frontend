import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ConfigProvider, theme } from 'antd';
import { AdminLogin, CompanyLogin, CompanyRegister, LandingPage, Login, Register } from './views';
import { PersistLogin } from './components';
import { AuthLayout, AdminLayout, CustomerLayout, AffiliateLayout, ServiceLayout } from './layout';
import { NotificationProvider } from './context/NotificationContext';

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "admin-login",
                element: <AdminLogin />
            },
            {
                path: "company-register",
                element: <CompanyRegister />
            },
            {
                path: "company-login",
                element: <CompanyLogin />
            }
        ],
    },
    {
        path: "/admin",
        element:
            <PersistLogin>
                <AdminLayout />
            </PersistLogin>,
        // Define children routes for admin if necessary
        // children: []
    },
    {
        path: "/customer",
        element: <CustomerLayout />,
        // Define children routes for customer if necessary
        // children: []
    },
    {
        path: "/affiliate",
        element: <AffiliateLayout />,
        // Define children routes for affiliate if necessary
        // children: []
    },
    {
        path: "/service",
        element: <ServiceLayout />,
        // Define children routes for affiliate if necessary
        // children: []
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
            <NotificationProvider>
                <RouterProvider router={router} />
            </NotificationProvider>

        </ConfigProvider>
    )
}

export default App