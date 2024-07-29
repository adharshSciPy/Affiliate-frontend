import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useUserDetailsByIdQuery } from '../../features/api/adminApiSlice'
function AdminPersonal() {

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
    <div className='adminpersonal'>
      <div className="adminpersonal__childs">

        <p>Name : {userData?.firstName}{' '}{userData?.lastName}</p>
        <p>Date of Birth : {userData?.DOB}</p>
        <p> Gender : {userData?.gender}</p>
        <p>Nationality : {userData?.nationality}</p>
      </div>

    </div>
  )
}

export default AdminPersonal
