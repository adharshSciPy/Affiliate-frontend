import { jwtDecode } from 'jwt-decode';
import { useSelector } from 'react-redux';
import { roles } from '../constants/roles';

const useAuth = () => {
    const { token } = useSelector((state) => state?.auth);

    // Role values
    const ADMIN_ROLE = roles.ADMIN_ROLE;
    const COMPANY_ROLE = roles.COMPANY_ROLE;
    const AFFILIATER_ROLE = roles.AFFILIATER_ROLE;
    const CUSTOMER_ROLE = roles.CUSTOMER_ROLE;

    let status = '';
    let isAdmin = false;
    let isCompany = false;
    let isAffiliater = false;
    let isCustomer = false;
    let isLoggedIn = false;
    let firstName = '';
    let role = null;
    let loggedInUserId = null

    if (token) {
        try {
            const decoded = jwtDecode(token);
            firstName = decoded?.firstName;
            role = decoded?.role;
            loggedInUserId = decoded?.id;

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

    return { firstName, role, status, isAdmin, isCompany, isAffiliater, isCustomer, isLoggedIn, loggedInUserId };
};

export default useAuth;
