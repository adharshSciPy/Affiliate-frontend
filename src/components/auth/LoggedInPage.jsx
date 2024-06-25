import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../loader/Loader';
import useAuth from '../../hooks/useAuth';

const LoggedInPage = () => {
  const navigate = useNavigate();
  const { role } = useAuth();

  const ADMIN_ROLE = 500;
  const COMPANY_ROLE = 400;
  const AFFILIATER_ROLE = 300;
  const CUSTOMER_ROLE = 200;

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
