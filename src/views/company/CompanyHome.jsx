import React from 'react'

import dashIcon1 from '../../assets/dashboard-icons/affiliaterdash1.png'
import dashIcon2 from '../../assets/dashboard-icons/affiliaterdash2.png'
import { DashBarchart, DashCount, DashDetails, DashTable, DashCompanyProfile } from '../../components'
import { Avatar, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons'

const CompanyHome = () => {

    const dashcard = [
        {
            icon: dashIcon1,
            title: 'FE2031',
            count: 23
        },
        {
            icon: dashIcon2,
            title: 'Total Earnings',
            count: 25000
        },
    ]

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

    return (
        <div className="companyhome">
            <div className="companyhome__container">
                <div className="companyhome__container--counts">
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

                <div className="companyhome__container--profile">
                    <DashCompanyProfile />
                </div>

                <div className="companyhome__container--chart">
                    <DashBarchart />
                </div>

                <div className="companyhome__container--table">
                    <DashTable
                        heading='Latest Affiliaters Marketer'
                        columns={columns}
                        data={tableData}
                        path='/admin/affiliaters'
                    />
                </div>

                <div className="companyhome__container--detail">
                    <DashDetails heading='Coupons' data={details} isFirstSelected={true} />
                </div>
            </div>
        </div>

    )
}

export default CompanyHome