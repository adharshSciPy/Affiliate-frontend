import React from 'react'
import { Avatar, Button, Table } from 'antd'
import { UserOutlined } from '@ant-design/icons';

const CompanyVerifications = () => {

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
      button: <Button type='primary'>Verify</Button>
    },
    {
      avatar: <Avatar size="large" icon={<UserOutlined />} />,
      fullName: 'Green',
      email: 'green@gmail.com',
      address: 'London No. 1 Lake Park',
      button: <Button type='primary'>Verify</Button>
    },
    {
      avatar: <Avatar size="large" icon={<UserOutlined />} />,
      fullName: 'Black',
      email: 'black@green.com',
      button: <Button type='primary'>Verify</Button>
    },
  ];

  return (
    <div className='newcompanies'>
      <div className="newcompanies__header">
        <h3>New Requests</h3>
      </div>

      <div className="newcompanies__table">
        <Table
          columns={columns}
          dataSource={tableData}
        />
      </div>
    </div>
  )
}

export default CompanyVerifications