import React from 'react'
import { Button, Modal } from 'antd'

const AdminCompanyVerifyModal = ({ isModal, modalData, setIsModal, verify, personal }) => {

    const close = () => {
        setIsModal(false)
    }


    return (
        <Modal
            centered
            open={isModal}
            width={600}
            onOk={() => verify()}
            onCancel={() => close()}
            footer={null}
        >
            <div className="companyverify">
                <div className="companyverify__text">
                    <p style={{ fontSize: "20px", textAlign: "center", fontFamily: "inherit"}}><strong>{personal?.data?.companyName}</strong></p>
                    <p>Company Email: <span>{personal?.data?.email}</span></p>
                    <p>Name: <span>{personal?.data?.firstName}{" "}{personal?.data?.lastName}</span></p>
                    <p>DOB: <span>{personal?.data?.DOB}</span></p>
                    <p>Gender: <span>{personal?.data?.Gender}</span></p>
                    <p>Address: <span>{personal?.data?.Address}</span></p>
                    <p>Nationality: <span>{personal?.data?.nationality}</span></p>
                    <p>Email: <span>{personal?.data?.emailAddress}</span></p>
                    <p>Phone Number: <span>{personal?.data?.phoneNumber}</span></p>
                    <p>Website: <span>{personal?.data?.website}</span></p>
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