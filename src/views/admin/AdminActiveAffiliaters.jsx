import React, { useEffect, useState } from 'react'
import { Table, Spin, Alert, Button } from 'antd'
import { useNavigate } from 'react-router-dom';
import { useVerifiedAffiliatersQuery } from '../../features/api/adminApiSlice';
import { TokenGenerationModal } from '../../components';

const AdminActiveAffiliaters = () => {

    const navigate = useNavigate()
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [tableData, setTableData] = useState([]);
    const [isModal, setIsModal] = useState(false)
    const [userDetails, setUserDetails] = useState(null)

    const { data, error, isLoading, refetch } = useVerifiedAffiliatersQuery({ page, limit })

    // table data generating from api
    useEffect(() => {
        if (data) {
            const structuredData = data?.data?.affiliaters.map((item, index) => {
                return {
                    key: index + 1,
                    id: item?._id,
                    firstName: item?.firstName,
                    lastName: item?.lastName,
                    email: item?.email,
                };
            });
            setTableData(structuredData);
        } else {
            console.log('Data is not in the expected format or is empty');
        }
    }, [data]);

    const handleClick = (record) => {
        setIsModal(true)
        setUserDetails(record)
    }

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
            title: 'Token',
            key: 'token',
            render: (_, record) => (
                <>
                    <Button onClick={() => handleClick(record)}>Generate Token</Button>
                </>
            ),
        },
    ]

    return (
        <div className='adminbasicstyle'>
            <div className="adminbasicstyle__header">
                <h3>Active Affiliaters</h3>
            </div>

            <div className="adminbasicstyle__table">
                {isLoading ? (
                    <Spin tip="Loading..." />
                ) : error ? (
                    <Alert message="Error loading data" type="error" showIcon />
                ) : (
                    <Table
                        columns={columns}
                        dataSource={tableData}
                        onRow={(record) => {
                            return {
                                onClick: () => {
                                    navigate(`/admin/affiliaters/${record?.id}`);
                                }
                            };
                        }}
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

            <TokenGenerationModal
                isModal={isModal}
                userDetails={userDetails}
                setIsModal={setIsModal}
                refetch={refetch}
            />
        </div>
    )
}

export default AdminActiveAffiliaters