import { React, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Button, Input } from 'antd';
import axios from 'axios';
import { useNotification } from '../../context/NotificationContext';

function CompanyProof() {


  const params = useParams();
  const { notification } = useNotification();
  const companyId = params?.id;
  const [files, setFiles] = useState({
    uploads: null,
    bankStatement: null,
    idDocument: null
  });

  const handleChange = (field) => (event) => {
    setFiles(prevFiles => ({
      ...prevFiles,
      [field]: event.target.files[0]
    }));

  };


  const handleSubmit = async () => {
    const formData = new FormData();
    Object.keys(files).forEach(key => {
      if (files[key]) {
        formData.append('uploads[]', files[key]);
      }
    });

    try {
      const result = await axios.patch(`http://localhost:8000/api/v1/company/companies/${companyId}/proofOfAddress`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      notification("success",
        "Files Updation Succesfull",
        result?.data?.message,
        "bottomRight");

    } catch (error) {
      notification(
        "error",
        "Files Updation Failed",
        error?.data?.message,
        "bottomRight"
      );
    }
  };

  return (
    <div className='adminproof'>
      <div className="adminproof__childs">
        <p>Utility Bills:
          <Input type='file' name='uploads' onChange={handleChange('utilityBill')} />
        </p>
        <p>Bank Statement:
          <Input type='file' name='uploads' onChange={handleChange('bankStatement')} />
        </p>
        <p>Identification Document:
          <Input type='file' name='uploads' onChange={handleChange('idDocument')} />
        </p>
        <Button style={{ marginTop: '20px' }} onClick={handleSubmit}>Upload</Button>
      </div>
    </div>
  );
}

export default CompanyProof
