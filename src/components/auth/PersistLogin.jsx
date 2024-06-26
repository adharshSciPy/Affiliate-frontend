import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAuthRefreshMutation } from "../../features/api/authApiSlice";
import { Loader, TryLoginAgain } from "../../components";

const PersistLogin = ({ children, checkAuth = true }) => {

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
                await refresh();
                if (isMounted) setTrueSuccess(true);
            } catch (err) {
                if (isMounted) console.error(err);
            }
        };

        if (!token) verifyRefreshToken();

        // Simulate a delay of 2 seconds for the loading screen
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 2000);

        return () => {
            isMounted = false;
            clearTimeout(timer);
        };
    }, []);

    let content;
    if (checkAuth) {
        if (showLoader || isLoading) { // Show loader for at least 2 seconds
            content = <Loader message='Loading...' isVisible={true} />;
        } else if (isError) {
            content = <TryLoginAgain message={error?.data?.message} />;
        } else if (isSuccess && trueSuccess) { //persist: yes, token: yes
            content = children;
        } else if (token && isUninitialized) { //persist: yes, token: yes
            content = children;
        }
    }
    else {
        content = children;
    }
    return content;
};

export default PersistLogin;
