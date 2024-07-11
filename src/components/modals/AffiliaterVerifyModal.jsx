import { Button, Modal } from 'antd'
import React from 'react'

const AffiliaterVerifyModal = ({ isModal, modalData, setIsModal, verify }) => {

    const close = () => {
        setIsModal(false)
    }

    return (
        <div className="verifymodal">
            <Modal
                centered
                open={isModal}
                width={400}
                onOk={() => verify()}
                onCancel={() => close()}
                footer={null}
            >
                <div className="verifymodal__text">
                    <b>Are you sure you want to verify this ?</b>
                    <p>Verifying will confirm their identity and grant them full access to all features.</p>
                </div>
                <div className="verifymodal__container">
                    <Button onClick={() => close()}>Cancel</Button>
                    <Button type='primary' onClick={() => verify()}>Verify</Button>
                </div>
            </Modal>
        </div>
    )
}

export default AffiliaterVerifyModal