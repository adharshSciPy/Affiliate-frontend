import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { roles } from '../../constants/roles';
import { useNavigate } from 'react-router-dom';

const IsVerifiedCompanyorAffiliater = ({ children }) => {
    const navigate = useNavigate();
    const COMPANY_ROLE = roles.COMPANY_ROLE;
    const AFFILIATER_ROLE = roles.AFFILIATER_ROLE;

    const { role, isVerified } = useAuth();

    useEffect(() => {
        if (role === COMPANY_ROLE) {
            if (!isVerified) {
                navigate('/companydetails-registration', { replace: true });
            }
        } else if (role === AFFILIATER_ROLE) {
            if (!isVerified) {
                navigate('/affiliaterdetails-registration', { replace: true });
            }
        } else {
            navigate('/auth/login', { replace: true });
        }
    }, [role, isVerified, navigate, COMPANY_ROLE, AFFILIATER_ROLE]);

    if ((role === COMPANY_ROLE || role === AFFILIATER_ROLE) && isVerified) {
        return children;
    }

    return null;
};

export default IsVerifiedCompanyorAffiliater;
