import React from 'react'
import { Button, Modal } from 'antd'

const DeleteModal = ({ isModal, setIsModal, deleteFn }) => {
    const close = () => {
        setIsModal(false)
    }

    return (
        <Modal
            centered
            open={isModal}
            onOk={() => deleteFn()}
            onCancel={() => close()}
            style={{ minHeight: '50%', height: '50%' }}
        >
            <p>Delete modal</p>
            <p>Are you sure ?</p>
            <Button onClick={() => deleteFn()}>Yes</Button>
        </Modal>
    )
}

export default DeleteModal