import { React, useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import { useUserDetailsByIdQuery } from '../../features/api/adminApiSlice'

const AdminDocuments = () => {

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
    <div className="admindocuments">
      <div className="admindocuments__childs">
        <p>ID Number : {userData?.IDNumber}</p>
        <p>Expiry Date of ID : {userData?.ExpiryDateOfID}</p>
      </div>
    </div>
  );
};

export default AdminDocuments;
