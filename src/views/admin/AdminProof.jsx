import React from 'react'
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';

function AdminProof() {

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
    <div className='adminproof'>
      <div className="adminproof__childs">
        <p> Utility Bills :   <Upload {...props}>
          <Button style={{ marginLeft: '5px' }} icon={<UploadOutlined />}>Upload</Button>
        </Upload></p>

        <p>Bank Statement :   <Upload {...props}>
          <Button style={{ marginLeft: '5px' }} icon={<UploadOutlined />}>Upload</Button>
        </Upload></p>

      </div>


    </div>
  )
}

export default AdminProof
