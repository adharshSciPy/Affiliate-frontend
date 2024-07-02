import React from 'react'
import { DashCount, DashBarchart, DashTable, DashDetails, DashCoupon } from '../../components'

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

  return (
    <div className='adminhome'>
      <div className="adminhome__top">
        {
          dashcard.map((item, index) => {
            return (
              <DashCount key={index} icon={item.icon} title={item.title} count={item.count} />
            )
          })
        }
      </div>

      <div className="adminhome__middle">
        <div className="adminhome__middle--left">
          <DashBarchart />
        </div>
        <div className="adminhome__middle--right">
          <DashDetails />
        </div>
      </div>

      <div className="adminhome__bottom">
        <div className="adminhome__bottom--left">
          <DashTable />
        </div>
        <div className="adminhome__bottom--right">
          <DashDetails />
        </div>
      </div>
    </div>
  )
}

export default AdminHome