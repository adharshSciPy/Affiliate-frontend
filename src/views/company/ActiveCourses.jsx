import { React, useState, useEffect } from 'react'
import { Table, Spin, Alert, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { EditFilled } from '@ant-design/icons'
import { useServiceDetailsQuery } from '../../features/api/serviceApiSlice'

function ActiveCourses() {

    const navigate = useNavigate()
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [tableData, setTableData] = useState([])
    const [userDetails, setUserDetails] = useState(null)

    const { data, error, isLoading, refetch } = useServiceDetailsQuery({ page: page, limit: limit })
    console.log("userdetails", userDetails)
    console.log("tableData", tableData)


    useEffect(() => {
        refetch()
        if (data) {
            const structuredData = data?.data?.services.map((item, index) => {
                return {
                    key: index + 1,
                    id: item?._id,
                    category: item?.category,
                    title: item?.title,
                    duration: item?.duration,
                    mode: item?.mode,
                }
            })
            setTableData(structuredData)
        }
        else {
            console.log('Data is not in the expected format or is empty')
        }
    }, [data])

    const handleClick = (record, e) => {
        e.stopPropagation();
        setUserDetails(record)
    }


    const columns = [
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Duration',
            dataIndex: 'duration',
            key: 'duration',
        },
        {
            title: 'Mode',
            dataIndex: 'mode',
            key: 'mode',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Button type='primary' style={{ height: '25px' }} onClick={() => navigate(`/company/addcourses/${record?.id}`)}><EditFilled /></Button>
            )
        }
    ]

    return (
        <div className='activecourses'>
            <div className='activecourses__container'>
                <div className='activecourses__table'>
                    {isLoading ? (
                        <Spin tip="Loading..." />
                    ) : error ? (
                        <Alert message="Error loading data" type="error" showIcon />
                    ) : (
                        <Table
                            columns={columns}
                            dataSource={tableData}
                            // onRow={(record) => {
                            //     return {
                            //         onClick: () => {
                            //             navigate(`/company/addcourses/${record?.id}`);
                            //         }
                            //     }
                            // }}

                            pagination={{
                                defaultCurrent: 1,
                                showSizeChanger: true,
                                current: page,
                                pageSize: limit,
                                total: data?.data?.total,
                                onChange: (page, pageSize) => {
                                    setPage(page);
                                    setLimit(pageSize)
                                }
                            }}
                        />
                    )}
                </div>

            </div>
        </div>
    )
}

export default ActiveCourses