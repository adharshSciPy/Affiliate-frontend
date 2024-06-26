import { jwtDecode } from 'jwt-decode';
import { useSelector } from 'react-redux';

const useAuth = () => {
    const { token } = useSelector((state) => state?.auth);
    console.log('token', token)

    // Role values
    const ADMIN_ROLE = 500;
    const COMPANY_ROLE = 400;
    const AFFILIATER_ROLE = 300;
    const CUSTOMER_ROLE = 200;

    let status = '';
    let isAdmin = false;
    let isCompany = false;
    let isAffiliater = false;
    let isCustomer = false;
    let isLoggedIn = false;
    let firstName = '';
    let role = null;

    if (token) {
        try {
            const decoded = jwtDecode(token);
            console.log('decoded', decoded)
            firstName = decoded?.firstName;
            role = decoded?.role;

            isAdmin = role === ADMIN_ROLE;
            isCompany = role === COMPANY_ROLE;
            isAffiliater = role === AFFILIATER_ROLE;
            isCustomer = role === CUSTOMER_ROLE;

            if (isAdmin) status = 'Admin';
            if (isCompany) status = 'Company';
            if (isAffiliater) status = 'Affiliater';
            if (isCustomer) status = 'Customer';
            if (role) isLoggedIn = true;
        } catch (error) {
            console.error("Token decoding error:", error);
        }
    }

    return { firstName, role, status, isAdmin, isCompany, isAffiliater, isCustomer, isLoggedIn };
};

export default useAuth;
