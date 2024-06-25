import { Outlet, Link } from "react-router-dom"
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useAuthRefreshMutation } from "../../features/api/authApiSlice"

const PersistLogin = ({ children }) => {

    const { token } = useSelector((state) => state?.auth);
    console.log('token', token)

    const [trueSuccess, setTrueSuccess] = useState(false)

    const [refresh, {
        isUninitialized,
        isLoading,
        isSuccess,
        isError,
        error
    }] = useAuthRefreshMutation()


    useEffect(() => {
        let isMounted = true;

        const verifyRefreshToken = async () => {
            console.log('verifying refresh token');
            try {
                await refresh();
                if (isMounted) setTrueSuccess(true);
            } catch (err) {
                if (isMounted) console.error(err);
            }
        };

        if (!token) verifyRefreshToken();

        return () => {
            isMounted = false;
        };
    }, []);



    let content
    if (isLoading) { //persist: yes, token: no
        console.log('loading')
        content = <p>Loading...</p>
    } else if (isError) { //persist: yes, token: no
        console.log('error')
        content = (
            <p className='errmsg'>
                {error.data?.message}
                <Link to="/auth/login">Please login again</Link>.
            </p>
        )
    } else if (isSuccess && trueSuccess) { //persist: yes, token: yes
        console.log('success')
        content = children
    } else if (token && isUninitialized) { //persist: yes, token: yes
        console.log('token and uninit')
        console.log(isUninitialized)
        content = children
    }

    return content
}
export default PersistLogin