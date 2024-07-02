import React from 'react'

import dashIcon1 from '../../assets/dashboard-icons/affiliaterdash1.png'
import dashIcon2 from '../../assets/dashboard-icons/affiliaterdash2.png'
import { DashBarchart, DashCount, DashDetails, DashTable, DashProfileCard } from '../../components'
import { Avatar, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons'

const AffiliaterHome = () => {

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

    return (
        <div className='affiliaterhome'>
            <div className="affiliaterhome__top">
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

                <DashProfileCard />
            </div>

            <div className="affiliaterhome__middle">
                <div className="affiliaterhome__middle--left">
                    <DashBarchart />
                </div>
            </div>

            <div className="affiliaterhome__bottom">
                <div className="affiliaterhome__bottom--left">
                    <DashTable
                        heading='Latest Affiliaters Marketer'
                        columns={columns}
                        data={tableData}
                        path='/admin/affiliaters'
                    />
                </div>
                <div className="affiliaterhome__bottom--right">
                    <DashDetails />
                </div>
            </div>
        </div>
    )
}

export default AffiliaterHome