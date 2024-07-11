import React from 'react'

import dashIcon1 from '../../assets/dashboard-icons/affiliaterdash1.png'
import { DashCount } from '../../components'
import { Button, Progress } from 'antd'

const AffiliaterCoupon = () => {
  return (
    <div className='affiliatercoupon'>

      <div className="affiliatercoupon__container">

        <div className="affiliatercoupon__containerbody">

          <div className="affiliatercoupon__containerbody--token">
            <DashCount
              icon={dashIcon1}
              title={'FE2031'}
              count={23} />
          </div>

          <div className="affiliatercoupon__containerbody--button">
            <Button>Request</Button>
          </div>

        </div>

        <div className="affiliatercoupon__progress">
          <Progress percent={30} showInfo={false} strokeColor="var(--primary-color)" />
        </div>

        <div className="affiliatercoupon__table">

          <div className="affiliatercoupon__table--head">

            <div className="affiliatercoupon__table--content">
              <p>Coupon name</p>
              <p>FE231</p>
            </div>

          </div>

          <div className="affiliatercoupon__table--content">
            <p>Coupon used</p>
            <p>22/100</p>
          </div>

          <div className="affiliatercoupon__table--content">
            <p>Coupon Comission</p>
            <p>10%</p>
          </div>

          <div className="affiliatercoupon__table--content">
            <p>Next Coupon</p>
            <p>Not Verfied</p>
          </div>

          <div className="affiliatercoupon__table--content">
            <p>More</p>
            <p>.......</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default AffiliaterCoupon