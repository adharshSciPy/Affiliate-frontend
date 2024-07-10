import { Button, Modal } from 'antd'
import React from 'react'

const AffiliaterVerifyModal = ({ isModal, modalData, setIsModal, verify }) => {

    const close = () => {
        setIsModal(false)
    }

    return (
        <Modal
            centered
            open={isModal}
            width={400}
            onOk={() => verify()}
            onCancel={() => close()}
            footer={null}
        >
            <Button type='primary' onClick={() => verify()}>Verify</Button>
        </Modal>
    )
}

export default AffiliaterVerifyModal