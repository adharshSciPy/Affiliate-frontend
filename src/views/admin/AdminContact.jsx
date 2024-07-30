import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useUserDetailsByIdQuery } from '../../features/api/adminApiSlice'

const AdminContact = () => {
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
    <div className='admincontact'>
      <div className="admincontact__childs">
        <p>Residential Address : {userData?.address}</p>
        <p>Phone Number : {userData?.phoneNumber}</p>
        <p>Email Address : {userData?.email}</p>
        <p>Website : {userData?.portfolio}</p>

      </div>

    </div>
  )
}

export default AdminContact
