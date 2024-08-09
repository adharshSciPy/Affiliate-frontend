import { React, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Input } from 'antd';
import axios from 'axios'
import { useNotification } from '../../context/NotificationContext';

function CompanyLicences() {
  const params = useParams()
  const { notification } = useNotification()
  const companyId = params?.id;
  const [files, setFiles] = useState({
    financial: null,
    partnershipAgreement: null,
    articlesOfOrganization: null,
    articlesOfIncorporation: null
  })

  const handleChange = (field) => (event) => {
    setFiles(prevFiles => ({
      ...prevFiles,
      [field]: event.target.files[0]
    }))
  }

  const handleSubmit = async () => {
    
    const formData = new FormData();
    Object.keys(files).forEach(key => {
      if (files[key]) {
        formData.append('businessLicense[]', files[key]);
      }
    });

    try {
      const result = await axios.patch(`http://localhost:8000/api/v1/company/companies/${companyId}/businessLicense`, formData, {
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

  }




  return (
    <div className='companylicences'>
      <div className="companylicences__tabs">
        <p>Financial Statments:
          <Input type='file' name='uploads' onChange={handleChange('financial')} />
        </p>
        <p>Partnership Agreement:
          <Input type='file' name='uploads' onChange={handleChange('partnershipAgreement')} />
        </p>
        <p>Articles of organization:
          <Input type='file' name='uploads' onChange={handleChange('articlesOfOrganization')} />
        </p>
        <p>Articles of incorporation:
          <Input type='file' name='uploads' onChange={handleChange('articlesOfIncorporation')} />
        </p>
        <Button style={{ marginTop: '20px' }} onClick={handleSubmit}>Upload</Button>
      </div>
    </div>
  )
}

export default CompanyLicences
