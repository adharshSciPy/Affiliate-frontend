import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ConfigProvider } from 'antd';
import {
    CompanyRegister,
    LandingPage,
    Login,
    Register,
    AdminHome,
    AffiliaterHome,
    CompanyHome,
    AffiliaterTransaction,
    AffiliaterCoupon,
    AffiliaterCommission,
    AdminActiveCompanies,
    AdminCompanyVerifications,
    AdminCompanyPayments,
    AffiliaterSettings,
    AdminActiveAffiliaters,
    AdminAffiliatersVerifications,
    AdminCustomers,
    AdminToken
} from './views';
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
        element:
            <LoggedInPage />
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
            },
            {
                path: "companies",
                element: <AdminActiveCompanies />
            },
            {
                path: "new-companies-request",
                element: <AdminCompanyVerifications />
            },
            {
                path: "company-payments",
                element: <AdminCompanyPayments />
            },
            {
                path: "affiliaters",
                element: <AdminActiveAffiliaters />
            },
            {
                path: "new-affiliaters-request",
                element: <AdminAffiliatersVerifications />
            },
            {
                path: "affiliater-tokens",
                element: <AdminToken />
            },
            {
                path: "customers",
                element: <AdminCustomers />
            },
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
            },
            {
                path: "commission",
                element: <AffiliaterCommission />
            },
            {
                path: "coupons",
                element: <AffiliaterCoupon />
            },
            {
                path: "transactions",
                element: <AffiliaterTransaction />
            }
            , {
                path: "settings",
                element: <AffiliaterSettings />
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
        children: [
            {
                path: "home",
                element: <CompanyHome />
            },
        ]
    },
]);

const App = () => {

    return (
        <ConfigProvider
            theme={{
                // algorithm: mode === 'dark' && theme.darkAlgorithm,
                token: {
                    colorPrimary: '#39843B',
                    // fontFamily: "Roboto Condensed, sans-serif",
                    fontFamily: "Libre Franklin, sans-serif",
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