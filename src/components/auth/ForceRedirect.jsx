import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Loader from '../loader/Loader';

const ForceRedirect = ({ children }) => {
    const navigate = useNavigate();
    const { isLoggedIn } = useAuth();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/logged-in');
        } else {
            setIsLoading(false);
        }
    }, [isLoggedIn, navigate]);

    if (isLoading) {
        return <Loader message='Loading...' isVisible={true} />;
    }

    return children;
}

export default ForceRedirect;
