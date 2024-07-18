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
            width={500}
            onOk={() => verify()}
            onCancel={() => close()}
            footer={null}
        >
            <div className="companyverify">
                <div className="companyverify__text">
                    <p style={{ fontSize: "20px", textAlign: "center", fontFamily: "inherit" }}><strong>{personal?.data?.companyName}</strong></p>
                    <p>Company Email: {personal?.data?.email}</p>
                    <p>Name: {personal?.data?.firstName}{" "}{personal?.data?.lastName}</p>
                    <p>DOB: {personal?.data?.DOB}</p>
                    <p>Gender: {personal?.data?.Gender}</p>
                    <p>Address: {personal?.data?.Address}</p>
                    <p>Nationality: {personal?.data?.nationality}</p>
                    <p>Email: {personal?.data?.emailAddress}</p>
                    <p>Phone Number: {personal?.data?.phoneNumber}</p>
                    <p>Website: {personal?.data?.website}</p>
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