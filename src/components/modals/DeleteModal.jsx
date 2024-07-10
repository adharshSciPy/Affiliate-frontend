import React from 'react'
import { Button, Modal } from 'antd'

const DeleteModal = ({ isModal, setIsModal, deleteFn }) => {
    const close = () => {
        setIsModal(false)
    }

    return (
        <div className="deletemodal">
            <Modal
                centered
                open={isModal}
                onOk={() => deleteFn()}
                onCancel={() => close()}
                style={{ minHeight: '50%', height: '50%' }}
                footer={null}
            >
                <div className='deletemodal__text'>
                    <b>Are you sure you wanna delete this ?</b>
                    <p>This change will reflect in your portal after an hour.</p>
                </div>
                <div className="deletemodal__container">
                    <Button onClick={() => close()}>Cancel</Button>
                    <Button type="primary" onClick={() => deleteFn()} danger>Delete</Button>
                </div>
            </Modal>
        </div>
    )
}

export default DeleteModal