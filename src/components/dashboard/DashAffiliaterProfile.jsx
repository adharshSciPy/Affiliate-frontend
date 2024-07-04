import React from 'react'
import affiliate from '../../assets/images/affiliate-profile.png'
import { FacebookLogo, InstagramLogo, PinterestLogo, WhatsappLogo, XLogo, YoutubeLogo } from '@phosphor-icons/react'
import { Progress } from 'antd';

const DashAffiliaterProfile = () => {
  return (
    <div className='dashaffprofile'>

      <div className="dashaffprofile__heading">
        <span><img src={affiliate} alt="" /></span>
        <h1>William</h1>
        <p>Affiliate Marketer</p>
      </div>

      <div className="dashaffprofile__commision-coupon">
        <div className="dashaffprofile__commision">
          <p>Commision</p>
          <p>21</p>
        </div>
        <div className="dashaffprofile__coupon">
          <p>Coupon Used</p>
          <p>19</p>
        </div>
      </div>

      <div className="dashaffprofile__strength">
        <h1>Profile strength</h1>
        <Progress percent={100} showInfo={false} />
      </div>

      <div className="dashaffprofile__verification">
        <h1>100% Verified Profile</h1>
        <h1>KYC Verified</h1>

      </div>

      <div className="dashaffprofile__social">
        <div className="dashaffprofile__icons">
          <YoutubeLogo size={28} weight="fill" />
          <InstagramLogo size={28} weight="fill" />
          <WhatsappLogo size={28} weight="fill" />
          <FacebookLogo size={28} weight="fill" />
          <PinterestLogo size={28} weight="fill" />
          <XLogo size={28} weight="fill" />
        </div>
      </div>


    </div>
  )
}

export default DashAffiliaterProfile