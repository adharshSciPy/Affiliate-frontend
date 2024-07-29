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




  const props = {
    name: 'file',
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div className="admindocuments">
      <div className="admindocuments__childs">
        <p>Document :   <Upload {...props}>
          <Button style={{ marginLeft: '5px' }} icon={<UploadOutlined />}>Upload</Button>
        </Upload>
        </p>
        <p>ID Number : {userData?.IDNumber}</p>
        <p>Expiry Date of ID : {userData?.ExpiryDateOfID}</p>
      </div>
    </div>
  );
};

export default AdminDocuments;
