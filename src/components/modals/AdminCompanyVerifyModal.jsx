import React from 'react'
import { Button, Modal } from 'antd'

const AdminCompanyVerifyModal = ({ isModal, modalData, setIsModal, verify }) => {

    const close = () => {
        setIsModal(false)
    }


    return (
        <Modal
            centered
            open={isModal}
        >
            {modalData?.companyName}
            <Button onClick={close}>Cancel</Button>
            <Button type='primary' danger onClick={() => verify()}>Yes, Logout!</Button>
        </Modal>
    )
}

export default AdminCompanyVerifyModal