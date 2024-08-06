import { React, useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { Button, message } from 'antd';
import { useUserDetailsByIdQuery } from '../../features/api/adminApiSlice'

function AdminInfo() {

  const params = useParams()
  const [userData, setUserData] = useState({})
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
        <p>Account Number : {userData?.accountNumber}</p>
        {userData.IFSC && <p>IFSC Code : {userData.IFSC}</p>}
        {userData.BIC && <p>BIC Code : {userData.BIC}</p>}
        {userData.BIC && <p>IBAN : {userData.IBAN}</p>}
        {userData?.UPINumber && <p>UPI Number : {userData?.UPINumber}</p>}
      </div>

    </div>
  )
}

export default AdminInfo
