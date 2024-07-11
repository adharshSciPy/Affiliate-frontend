import React from 'react'
import { useParams } from 'react-router-dom'
import profile from "../../assets/images/affiliate-profile.png"
import { CalendarBlank, Envelope, MapPin, Phone, WhatsappLogo } from '@phosphor-icons/react'


const AdminAffiliaterDetails = () => {

  const params = useParams()
  console.log('params', params)
  return (
    <div className=' adminaffiliater'>

      <div className="adminaffiliater__container">

        <div className="adminaffiliater__head">
          <img src={profile} alt="" />
        </div>

        <div className="adminaffiliater__detials">
          <h3>William Johnson</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam totam repudiandae repellat </p>
          <div className="adminaffiliater__address">
            <span className="adminaffiliater__address--sociallinks"><Envelope size={24} />williamjohnson@gmail.com</span>
            <span className="adminaffiliater__address--sociallinks"><MapPin size={24} />Los Angels,USA</span>
            <span className="adminaffiliater__address--sociallinks"><CalendarBlank size={24} />Joined April 2022</span>
            <span className="adminaffiliater__address--sociallinks"><Phone size={24} />8345373475</span>
            <span className="adminaffiliater__address--sociallinks"><WhatsappLogo size={24} />8345373475</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AdminAffiliaterDetails