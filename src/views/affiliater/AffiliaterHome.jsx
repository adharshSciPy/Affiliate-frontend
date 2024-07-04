import React from 'react'

import dashIcon1 from '../../assets/dashboard-icons/affiliaterdash1.png'
import dashIcon2 from '../../assets/dashboard-icons/affiliaterdash2.png'
import { DashBarchart, DashCount, DashDetails, DashTable, DashAffiliaterProfile } from '../../components'
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
        // <div className='affiliaterhome'>
        //     <div className="affiliaterhome__top">
        //         {
        //             dashcard.map((item, index) => {
        //                 return (
        //                     <DashCount
        //                         key={index}
        //                         icon={item.icon}
        //                         title={item.title}
        //                         count={item.count} />
        //                 )
        //             })
        //         }

        //         <DashProfileCard />
        //     </div>

        //     <div className="affiliaterhome__middle">
        //         <div className="affiliaterhome__middle--left">
        //             <DashBarchart />
        //         </div>
        //     </div>

        //     <div className="affiliaterhome__bottom">
        //         <div className="affiliaterhome__bottom--left">
        //             <DashTable
        //                 heading='Latest Affiliaters Marketer'
        //                 columns={columns}
        //                 data={tableData}
        //                 path='/admin/affiliaters'
        //             />
        //         </div>
        //         <div className="affiliaterhome__bottom--right">
        //             <DashDetails />
        //         </div>
        //     </div>
        // </div>
        <div className="affiliaterhome">
            <div className="affiliaterhome__container">
                <div className="affiliater__container--count-1">
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

                <div className="affiliaterhome__container--profile">
                    <DashAffiliaterProfile />
                </div>

                <div className="affiliaterhome__container--chart">
                    <DashBarchart />
                </div>

                <div className="affiliaterhome__container--table">
                    <DashTable
                        heading='Latest Affiliaters Marketer'
                        columns={columns}
                        data={tableData}
                        path='/admin/affiliaters'
                    />
                </div>

                <div className="affiliaterhome__container--detail">
                    <DashDetails heading='Coupons' data={details} isFirstSelected={true} />
                </div>
            </div>
        </div>

    )
}

export default AffiliaterHome