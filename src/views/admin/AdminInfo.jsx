import { React, useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { Button, message } from 'antd';
import { useUserDetailsByIdQuery } from '../../features/api/adminApiSlice'

function AdminInfo() {

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
    <div className='admininfo'>
        <div className="admininfo__childs">
            <p>IFSC/BIC Code : {userData?.IFSC}</p>
            <p>Account Number : {userData?.accountNumber}</p>
            <p>UPI Number : 897787676</p>
        </div>
      
    </div>
  )
}

export default AdminInfo
