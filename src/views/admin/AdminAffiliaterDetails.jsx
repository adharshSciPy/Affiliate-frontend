import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import profile from "../../assets/images/affiliate-profile.png"
import { CalendarBlank, Envelope, MapPin, Phone, WhatsappLogo } from '@phosphor-icons/react'

import { useUserDetailsByIdQuery } from '../../features/api/adminApiSlice'

const AdminAffiliaterDetails = () => {

  const params = useParams()
  const [userData, setUserData] = useState([])
  const { data, error, isLoading, refetch } = useUserDetailsByIdQuery({ userId: params?.id })

  useEffect(() => {
    refetch()
  }, [params])

  useEffect(() => {
    setUserData(data?.data)
  }, [data])

  return (
    <div className=' adminaffiliater'>

      <div className="adminaffiliater__container">
        <div className="adminaffiliater__head">
          <img src={profile} alt="" />
        </div>

        <div className="adminaffiliater__detials">
          <h3>{userData?.firstName} {userData?.lastName}</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam totam repudiandae repellat </p>
          <div className="adminaffiliater__address">
            <span className="adminaffiliater__address--sociallinks"><Envelope size={24} />{userData?.email}</span>
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