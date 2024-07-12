import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import profile from "../../assets/images/affiliate-profile.png"
import discount from "../../assets/dashboard-icons/affiliaterdash1.png"
import { CalendarBlank, Copy, Envelope, FacebookLogo, InstagramLogo, MapPin, Phone, WhatsappLogo, XLogo, YoutubeLogo } from '@phosphor-icons/react'

import { useUserDetailsByIdQuery } from '../../features/api/adminApiSlice'
import { Tabs } from 'antd'

import AdminPersonal from './AdminPersonal'

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

  console.log('user details', userData, params?.id)

  return (
    <div className='adminaffiliater'>

      <div className="adminaffiliater__container">
        <div className="adminaffiliater__header">
          <div className="adminaffiliater__header--icon">
            <img src={profile} alt="" />
          </div>
        </div>

        <div className="adminaffiliater__detials">
          <div className="adminaffiliater__detials--token">
            <h3>{userData?.firstName} {userData?.lastName}</h3>
            <span><img src={discount} alt="" />FEC020 <Copy size={18} /></span>
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam totam repudiandae repellat </p>
          <div className="adminaffiliater__address">
            <span className="adminaffiliater__address--sociallinks"><Envelope size={24} />{userData?.email}</span>
            <span className="adminaffiliater__address--sociallinks"><MapPin size={24} />Los Angels,USA</span>
            <span className="adminaffiliater__address--sociallinks"><CalendarBlank size={24} />Joined April 2022</span>
            <span className="adminaffiliater__address--sociallinks"><Phone size={24} />8345373475</span>
            <span className="adminaffiliater__address--sociallinks"><WhatsappLogo size={24} />8345373475</span>
          </div>
          <div className="adminaffiliater__address--socialicons">
            <span><YoutubeLogo size={30} color="#ee4444" weight="fill" /></span>
            <span><InstagramLogo size={28} color="#c51168" />
            </span>
            <span> <FacebookLogo size={28} color="#2c6ef2" weight="fill" /></span>
            <span> <XLogo size={28} color="#3c3d3e" weight="thin" /></span>
          </div>
        </div>

        <div className='adminaffiliater__tab'>
          <div className="adminaffiliater__tabs">
            <Tabs
              // defaultActiveKey="1"
              tabPosition='top'
              // onChange={handleTabChange}
              items={[
                {
                  label: 'Personal Information',
                  key: '1',
                  children: (
                    <>
                      <AdminPersonal />
                    </>
                  ),
                },
                {
                  label: 'Contact Infromation',
                  key: '2',
                  // children: <AffiliaterPolicies />,
                },
                {
                  label: 'Identification Documents',
                  key: '3',
                  // children: <AffiliaterAgreement />,
                },
                {
                  label: 'Proof of Address',
                  key: '4',
                  // children: <AffiliaterNotification />,
                },
                {
                  label: 'Payments',
                  key: '5',
                  // children: <AffiliaterHelp />,
                },
              ]}
            />
          </div>
        </div>


      </div>
    </div>
  )
}

export default AdminAffiliaterDetails