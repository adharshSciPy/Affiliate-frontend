import React from 'react'

const LogoutModal = ({ logout }) => {
    return (
        <div onClick={() => logout()} className='logoutmodal'>
            
        </div>
    )
}

export default LogoutModal