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
            width={400}
            onOk={() => verify()}
            onCancel={() => close()}
            footer={null}
        >
            <div className="companyverify">
                <div className="companyverify__text">
                    <p style={{ fontSize: "20px", textAlign: "center", fontFamily: "inherit" }}><strong>Company Details</strong></p>
                    <p>Company: {modalData?.companyName}</p>
                    <p>Company Email: {modalData?.email}</p>
                    <p>First Name:{modalData?.firstName}</p>
                </div>
                <div className="companyverify__container">
                    <Button style={{ marginRight: "10px" }} onClick={close}>Cancel</Button>
                    <Button type='primary' onClick={() => verify()}>Verify</Button>
                </div>
            </div>
        </Modal>
    )
}

export default AdminCompanyVerifyModal