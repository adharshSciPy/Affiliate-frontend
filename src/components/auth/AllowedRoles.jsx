import React, { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const AllowedRoles = ({ roles, children }) => {
    const { role } = useAuth();
    const navigate = useNavigate();
    const isAllowed = roles.includes(role);

    useEffect(() => {
        if (!isAllowed) {
            navigate('/logged-in', { replace: true });
        }
    }, [isAllowed, navigate]);

    return isAllowed ? children : null;
};

export default AllowedRoles;
