import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../loader/Loader';
import useAuth from '../../hooks/useAuth';
import { roles } from '../../constants/roles';

const LoggedInPage = () => {
  const navigate = useNavigate();
  const { role } = useAuth();

  const ADMIN_ROLE = roles.ADMIN_ROLE;
  const COMPANY_ROLE = roles.COMPANY_ROLE;
  const AFFILIATER_ROLE = roles.AFFILIATER_ROLE;
  const CUSTOMER_ROLE = roles.CUSTOMER_ROLE;

  useEffect(() => {
    switch (role) {
      case ADMIN_ROLE:
        navigate('/admin');
        break;
      case COMPANY_ROLE:
        navigate('/company');
        break;
      case AFFILIATER_ROLE:
        navigate('/affiliater');
        break;
      case CUSTOMER_ROLE:
        navigate('/customer');
        break;
      default:
        navigate('/auth/login');
        break;
    }
  }, [role, navigate]);

  return <Loader message='Validating roles...' isVisible={true} />;
}

export default LoggedInPage;
