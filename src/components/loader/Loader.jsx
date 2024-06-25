import React from 'react'
import { Triangle } from 'react-loader-spinner'

const Loader = ({ message, isVisible }) => {
    return (
        <div className='loader'>
            <Triangle
                visible={isVisible}
                height="100"
                width="100"
                color="#39843B"
            />
            <p>{message}</p>
        </div>
    )
}

export default Loader