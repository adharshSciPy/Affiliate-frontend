import React, { useEffect, useState } from 'react'
import { Table, Spin, Alert } from 'antd'
import { useTokensQuery } from '../../features/api/adminApiSlice';

const AdminToken = () => {

    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [tableData, setTableData] = useState([]);

    const { data, error, isLoading } = useTokensQuery({ page, limit })

    console.log('data', data)

    useEffect(() => {
        if (data) {
            const structuredData = data?.data?.tokens.map((item, index) => {
                return {
                    key: index + 1,
                    token: item?.token,
                    discount: `${item?.discount}%`,
                    useCount: item?.useCount,
                };
            });
            setTableData(structuredData);
        } else {
            console.log('Data is not in the expected format or is empty');
        }
    }, [data]);

    const columns = [
        {
            title: 'Token',
            dataIndex: 'token',
            key: 'token',
        },
        {
            title: 'Used Times',
            dataIndex: 'useCount',
            key: 'useCount',
        },
        {
            title: 'Discount',
            dataIndex: 'discount',
            key: 'discount',
        },
    ]

    return (
        <div className='adminbasicstyle'>
            <div className="adminbasicstyle__header">
                <h3>Active Tokens</h3>
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

export default AdminToken