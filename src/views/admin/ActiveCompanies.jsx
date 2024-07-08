import React, { useState } from 'react'
import { Avatar, Button, Table } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import { useVerifiedCompaniesQuery } from '../../features/api/adminApiSlice';

const ActiveCompanies = () => {

  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)

  const { data } = useVerifiedCompaniesQuery({ page, limit })

  console.log('data', data)

  const columns = [
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
    },
    {
      title: 'Full Name',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '',
      dataIndex: 'button',
      key: 'button',
    },
  ];

  const tableData = [
    {
      avatar: <Avatar size="large" icon={<UserOutlined />} />,
      fullName: 'Brown',
      email: 'brown@gmail.com',
      address: 'New York No. 1 Lake Park',
      button: <Button>Verify</Button>
    },
    {
      avatar: <Avatar size="large" icon={<UserOutlined />} />,
      fullName: 'Green',
      email: 'green@gmail.com',
      address: 'London No. 1 Lake Park',
      button: <Button>Verify</Button>
    },
    {
      avatar: <Avatar size="large" icon={<UserOutlined />} />,
      fullName: 'Black',
      email: 'black@green.com',
      button: <Button>MODIFY</Button>
    },
  ];


  return (
    <div className='activecompanies'>
      <div className="activecompanies__header">
        <h3>Active Companies</h3>
      </div>

      <div className="activecompanies__table">
        <Table
          columns={columns}
          dataSource={tableData}
        />
      </div>
    </div>
  )
}

export default ActiveCompanies