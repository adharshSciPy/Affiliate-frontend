import { CloseOutlined, MenuOutlined } from '@ant-design/icons'
import { PushPin, PushPinSlash } from '@phosphor-icons/react'
import { Button } from 'antd'
import React from 'react'

const Closebutton = ({ isOpen, handleClick }) => {

    return (
        <div className='dashnavbar__buttons'>
            <button onClick={() => { handleClick() }}>
                {isOpen ?
                    <PushPin size={20} weight="fill" color='white' />

                    :
                    // <CloseOutlined size={35} color='white' />
                    <PushPinSlash size={20} color='white'  />
                }
            </button>
        </div>
    )
}

export default Closebutton