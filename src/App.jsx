import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ConfigProvider, theme } from 'antd';
import { AdminLogin, CompanyLogin, CompanyRegister, LandingPage, Login, Register, AdminRegister } from './views';
import { PersistLogin, LoggedInPage, ForceRedirect, PageNotFound } from './components';
import { AuthLayout, AdminLayout, CustomerLayout, AffiliateLayout, ServiceLayout } from './layout';
import { NotificationProvider } from './context/NotificationContext';

const router = createBrowserRouter([
    {
        path: "*",
        element: <PageNotFound />,
    },
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/logged-in",
        element: <LoggedInPage />,
    },
    {
        path: "/auth",
        element:
            <PersistLogin checkAuth={false}>
                <ForceRedirect>
                    <AuthLayout />
                </ForceRedirect>
            </PersistLogin>,

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
                path: "admin-register",
                element: <AdminRegister />
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
        element:
            <PersistLogin>
                <CustomerLayout />
            </PersistLogin>,
        // Define children routes for customer if necessary
        // children: []
    },
    {
        path: "/affiliater",
        element:
            <PersistLogin>
                <AffiliateLayout />
            </PersistLogin >,
        // Define children routes for affiliate if necessary
        // children: []
    },
    {
        path: "/company",
        element:
            <PersistLogin>
                <ServiceLayout />
            </PersistLogin>,
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