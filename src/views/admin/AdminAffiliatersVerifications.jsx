import React, { useEffect, useState } from 'react'
import { Table, Spin, Alert, Button } from 'antd'
import { useNewAffiliatersQuery } from '../../features/api/adminApiSlice';

const AdminAffiliatersVerifications = () => {

    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [tableData, setTableData] = useState([]);

    const { data, error, isLoading } = useNewAffiliatersQuery({ page, limit })

    const handleButtonClick = (id) => {
        console.log('id', id)
    }

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
                <Button onClick={() => handleButtonClick(record?.id)}>Verify</Button>
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
                    <Alert message="Error loading data" type="error" showIcon />
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
        </div>
    )
}

export default AdminAffiliatersVerifications