import React, { useEffect, useState } from 'react'
import { Table, Spin, Alert, Button } from 'antd'
import { useNewAffiliatersQuery, useVerifyAffiliaterMutation, useVerifiedAffiliatersQuery } from '../../features/api/adminApiSlice';
import { AffiliaterVerifyModal } from '../../components';
import { useNotification } from '../../context/NotificationContext';

const AdminAffiliatersVerifications = () => {

    const { notification } = useNotification()
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [tableData, setTableData] = useState([]);
    const [isModal, setIsModal] = useState(false)
    const [modalData, setModalData] = useState([])
    const [isEmptyData, setIsEmptyData] = useState(false)

    const { data, error, isLoading, refetch } = useNewAffiliatersQuery({ page, limit })
    const { refetch: refetchActiveAffiliaters } = useVerifiedAffiliatersQuery({ page : 1, limit : 10 })
    const [verifyAffiliater] = useVerifyAffiliaterMutation();


    const handleButtonClick = (record) => {
        setModalData(record)
        setIsModal(true)
    }

    // verify affiliater api calling logic
    const handleVerifyCompany = async () => {
        try {
            const response = await verifyAffiliater({ affiliaterId: modalData?.id }).unwrap();
            if (response) {
                notification('success', 'Affiliater verified successfully!', response?.data?.message, 'bottomRight');
                setIsModal(false);
                refetch();
                refetchActiveAffiliaters();
            }
        } catch (err) {
            notification('error', 'Verification failed', err?.data?.message, 'bottomRight');
        }
    };

    useEffect(() => {
        if (data) {
            const structuredData = data?.data?.affiliaters.map((item, index) => {
                return {
                    key: index + 1,
                    id: item?._id,
                    firstName: item.firstName,
                    lastName: item.lastName,
                    email: item.email,
                };
            });
            setTableData(structuredData);
        } else {
            console.log('Data is not in the expected format or is empty');
        }
    }, [data]);

    // error management
    useEffect(() => {
        if (error?.status === 404) {
            setIsEmptyData(true)
        }
        else {
            setIsEmptyData(false)
        }
    }, [error])

    const columns = [
        {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName',
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',
        },
        {
            title: 'Email Address',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Button onClick={() => handleButtonClick(record)}>Verify</Button>
            ),
        },
    ]



    return (
        <div className='adminbasicstyle'>
            <div className="adminbasicstyle__header">
                <h3>Active Companies</h3>
            </div>

            <div className="adminbasicstyle__table">
                {isLoading ? (
                    <Spin tip="Loading..." />
                ) : error ? (
                    <Alert message={`${isEmptyData ? 'Waiting for new Affiliaters to register' : 'Something error happened'}`} type={`${isEmptyData ? 'warning' : 'error'}`} showIcon />
                ) : (
                    <Table
                        columns={columns}
                        dataSource={tableData}
                        pagination={{
                            current: page,
                            pageSize: limit,
                            total: data?.total || 0,
                            onChange: (page, pageSize) => {
                                setPage(page);
                                setLimit(pageSize);
                            },
                        }}
                    />
                )}
            </div>

            <AffiliaterVerifyModal
                isModal={isModal}
                modalData={modalData}
                setIsModal={setIsModal}
                verify={handleVerifyCompany}
            />
        </div>
    )
}

export default AdminAffiliatersVerifications