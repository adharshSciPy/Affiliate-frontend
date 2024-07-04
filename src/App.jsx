import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ConfigProvider } from 'antd';
import { CompanyRegister, LandingPage, Login, Register, AdminHome, AffiliaterHome } from './views';
import { PersistLogin, AllowedRoles, LoggedInPage, ForceRedirect, PageNotFound } from './components';
import { AuthLayout, AdminLayout, CustomerLayout, AffiliateLayout, CompanyLayout } from './layout';
import { roles } from './constants/roles'
import { NotificationProvider } from './context/NotificationContext';

const router = createBrowserRouter([
    {
        path: "*",
        element: <PageNotFound />,
    },
    {
        path: "/",
        element:
            <PersistLogin checkAuth={false}>
                <ForceRedirect>
                    <LandingPage />
                </ForceRedirect>
            </PersistLogin>,
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
                path: "company-register",
                element: <CompanyRegister />
            }
        ],
    },
    {
        path: "/admin",
        element:
            <PersistLogin>
                <AllowedRoles roles={[roles.ADMIN_ROLE]}>
                    <AdminLayout />
                </AllowedRoles>
            </PersistLogin>,
        // Define children routes for admin if necessary
        children: [
            {
                path: "home",
                element: <AdminHome />
            }
        ]
    },
    {
        path: "/customer",
        element:
            <PersistLogin>
                <AllowedRoles roles={[roles.CUSTOMER_ROLE]}>
                    <CustomerLayout />
                </AllowedRoles>
            </PersistLogin>,
        // Define children routes for customer if necessary
        // children: []
    },
    {
        path: "/affiliater",
        element:
            <PersistLogin>
                <AllowedRoles roles={[roles.AFFILIATER_ROLE]}>
                    <AffiliateLayout />
                </AllowedRoles>
            </PersistLogin >,
        // Define children routes for affiliate if necessary
        children: [
            {
                path: "home",
                element: <AffiliaterHome />
            }
        ]
    },
    {
        path: "/company",
        element:
            <PersistLogin>
                <AllowedRoles roles={[roles.COMPANY_ROLE]}>
                    <CompanyLayout />
                </AllowedRoles>
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