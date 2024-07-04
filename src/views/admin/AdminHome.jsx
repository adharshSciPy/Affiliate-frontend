import React from 'react'
import { DashCount, DashBarchart, DashTable, DashDetails } from '../../components'

import { Avatar, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons'

import dashIcon1 from '../../assets/dashboard-icons/admindash1.png'
import dashIcon2 from '../../assets/dashboard-icons/admindash2.png'
import dashIcon3 from '../../assets/dashboard-icons/admindash3.png'


const AdminHome = () => {

  const dashcard = [
    {
      icon: dashIcon1,
      title: 'Service Providers',
      count: 2500
    },
    {
      icon: dashIcon2,
      title: 'Affiliate Marketers',
      count: 1000
    },
    {
      icon: dashIcon3,
      title: 'Customers',
      count: 3500
    }
  ]

  const data = [
    {
      title: 'Total Service Provider',
      value: '2590'
    }
  ]

  const details = [
    {
      title: "Total Service Provider",
      value: "2590"
    },
    {
      title: "Total Affiliate Marketer",
      value: "1594"
    },
    {
      title: "Total Customer",
      value: "3670"
    },
    {
      title: "Total Verified Service Provider",
      value: "1853"
    },
    {
      title: "Total Verified Marketers",
      value: "1250"
    }
  ]

  const coupons = [
    {
      title: "Total Coupons",
      value: "2500"
    },
    {
      title: "Expired Coupons",
      value: "250"
    },
    {
      title: "Validate Coupons",
      value: "....."
    }
  ]

  // columns, data
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
      button: <Button>Verify</Button>
    },
  ];
  return (

    <div className="adminhome">
      <div className="adminhome__container">

        <div className="adminhome__container--count">
          {
            dashcard.map((item, index) => {
              return (
                <DashCount
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  count={item.count} />
              )
            })
          }
        </div>

        <div className="adminhome__container--chart">
          <DashBarchart />
        </div>

        <div className="adminhome__container--detail">
          <DashDetails heading='Details' data={details} isFirstSelected={true} />
        </div>

        <div className="adminhome__container--table">
          <DashTable
            heading='Latest Affiliaters Marketer'
            columns={columns}
            data={tableData}
            path='/admin/affiliaters'
          />
        </div>

        <div className="adminhome__container--coupon">
          <DashDetails heading='Coupons' data={coupons} />
        </div>
      </div>
    </div>
  )
}

export default AdminHome