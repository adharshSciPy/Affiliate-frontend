import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AdminLogin, CompanyRegister, LandingPage, Login, Regsiter } from './views'
import { AuthLayout, AdminLayout, CustomerLayout, AffiliateLayout } from './layout';

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
        children: [
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

            {
                path: 'admin',
                element: <AdminLayout />,
                // children: []
            },

            {
                path: 'customer',
                element: <CustomerLayout />,
                // children: []
            },

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
        <RouterProvider router={router} />
    )
}

export default App