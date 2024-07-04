import React from 'react'
import affiliate from '../../assets/images/affiliate-profile.png'
import { FacebookLogo, InstagramLogo, PinterestLogo, WhatsappLogo, XLogo, YoutubeLogo } from '@phosphor-icons/react'

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
        <div></div>
      </div>

      <div className="dashaffprofile__verification">
        <h1>100% Verified Profile</h1>
        <h1>KYC Verified</h1>

      </div>

      <div className="dashaffprofile__social">
        <h1>Social Media</h1>
        <div className="dashaffprofile__icons">
        <YoutubeLogo size={28} />
        <InstagramLogo size={28} />
        <WhatsappLogo size={28} />
        <FacebookLogo size={28} />
        <PinterestLogo size={28} />
        <XLogo size={28} />
        </div>
      </div>


    </div>
  )
}

export default DashAffiliaterProfile