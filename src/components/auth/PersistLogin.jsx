import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAuthRefreshMutation } from "../../features/api/authApiSlice";
import { Loader, TryLoginAgain } from "../../components";
import { setLogin } from '../../features/slice/authSlice';

const PersistLogin = ({ children, checkAuth = true }) => {

    const dispatch = useDispatch();
    const { token } = useSelector((state) => state?.auth);

    const [trueSuccess, setTrueSuccess] = useState(false);
    const [showLoader, setShowLoader] = useState(true);

    const [refresh, {
        isUninitialized,
        isLoading,
        isSuccess,
        isError,
        error
    }] = useAuthRefreshMutation();

    useEffect(() => {
        let isMounted = true;

        const verifyRefreshToken = async () => {
            try {
                const response = await refresh();
                dispatch(setLogin({ accessToken: response?.data?.data }))
                if (isMounted) setTrueSuccess(true);
            } catch (err) {
                if (isMounted) console.error(err);
            }
        };

        if (!token) verifyRefreshToken();

        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 2000);

        return () => {
            isMounted = false;
            clearTimeout(timer);
        };
    }, [token]);

    let content;
    if (checkAuth) {
        if (showLoader || isLoading) {
            content = <Loader message='Loading...' isVisible={true} />;
        } else if (isError) {
            content = <TryLoginAgain message={error?.data?.message} />;
        } else if (isSuccess && trueSuccess) {
            content = children;
        } else if (token && isUninitialized) {
            content = children;
        }
    }
    else {
        content = children;
    }
    return content;
};

export default PersistLogin;
