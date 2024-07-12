import React, { useEffect, useState } from 'react'
import { Table, Spin, Alert } from 'antd'
import { useCustomersQuery } from '../../features/api/adminApiSlice';

const AdminCustomers = () => {

    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [tableData, setTableData] = useState([]);

    const { data, error, isLoading } = useCustomersQuery({ page, limit })

    console.log('data', data)

    useEffect(() => {
        if (data) {
            const structuredData = data?.data?.customers?.map((item, index) => {
                return {
                    key: index + 1,
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
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
    ]

    return (
        <div className='adminbasicstyle'>
            <div className="adminbasicstyle__header">
                <h3>All Customers</h3>
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
                            defaultCurrent: 1,
                            showSizeChanger: true,
                            current: page,
                            pageSize: limit,
                            total: data?.data?.total,
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

export default AdminCustomers