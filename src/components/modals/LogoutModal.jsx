import React, { useState } from 'react';
import { Button, Modal, Flex } from 'antd';
import { Power } from "@phosphor-icons/react"

const LogoutModal = ({ isModal, setIsModal, logout }) => {

    const close = () => {
        setIsModal(false)
    }

    return (
        <>
            <Modal
                centered
                open={isModal}
                onOk={() => logout()}
                onCancel={() => close()}
                footer={null}
                width={500}
                closable={false}
                maskClosable={false}
                mask={true}
                style={{ minHeight: '50%', height: '50%' }}
            >
                <div className="logoutmodal">
                    <div className="logoutmodal__header">
                        <Power size={28} color="#f50000" weight="fill" />
                        <h2>Logout</h2>
                    </div>
                    <p>Are you sure you want to logout? Once you logout you need to login again. Are you OK?</p>

                    <div className='logoutmodal__button'>
                        <Button onClick={close}>Cancel</Button>
                        <Button type='primary' danger onClick={() => logout()}>Yes, Logout!</Button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default LogoutModal