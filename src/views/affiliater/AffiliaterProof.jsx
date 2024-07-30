import { React, useState } from "react";
import { useProofOfAddressMutation } from "../../features/api/affiliaterApiSlice";
import { useNotification } from "../../context/NotificationContext";
import useAuth from "../../hooks/useAuth";
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload, Input } from 'antd';

function AffiliaterProof() {

  const [proofdetails] = useProofOfAddressMutation();
  const { loggedInUserId } = useAuth();

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

  const { TextArea } = Input;
  const { notification } = useNotification();

  const fields = {
    IDNumber: "",
    ExpiryDateOfID: ""
  };
  //input field onchange handler
  const [form, setForm] = useState(fields);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  //handlesubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        IDNumber: form.IDNumber,
        ExpiryDateOfID: form.ExpiryDateOfID
      };
      let affiliaterId = loggedInUserId;
      console.log("idid", affiliaterId)
      console.log("payload", payload)
      const result = await proofdetails({ affiliaterId, payload });
      if (result) {
        notification(
          "success",
          "Registration Succesfull",
          result?.data?.message,
          "bottomRight"
        );
        setForm(fields);
      }
    } catch (error) {   
      notification(
        "error",
        "Registration Failed",
        error?.data?.message,
        "bottomRight"
      );
    }
  };
  return (
    <>
      <div className="affiliaterProof">
        <div className="affiliaterProof__container">
          <div className="affiliaterProof__container--input">
            <div className="affiliaterProof__container--label">
              <p>Valid ID:  <Upload {...props}>
                <Button style={{ marginLeft: '5px' }} icon={<UploadOutlined />}>Upload</Button>
              </Upload></p>
            </div>
          </div>
          <div className="affiliaterProof__container--input">
            <div className="affiliaterProof__container--label">
              <p>Utility Bill:  <Upload {...props}>
                <Button style={{ marginLeft: '5px' }} icon={<UploadOutlined />}>Upload</Button>
              </Upload></p>
            </div>
          </div>
          <div className="affiliaterProof__container--input">
            <div className="affiliaterProof__container--label">
              <p>Bank Statement:  <Upload {...props}>
                <Button style={{ marginLeft: '5px' }} icon={<UploadOutlined />}>Upload</Button>
              </Upload></p>
            </div>
          </div>
          <div className="affiliaterProof__container--input">
            <div className="affiliaterProof__container--label">
              <p>ID Number</p>
            </div>
            <Input
              placeholder="5678"
              name="IDNumber"
              value={form.IDNumber}
              onChange={handleChange}
              size="medium"
            />
          </div>
          <div className="affiliaterProof__container--input">
            <div className="affiliaterProof__container--label">
              <p>Expiry Date of ID</p>
            </div>
            <Input
              placeholder="dd/mm/year"
              name="ExpiryDateOfID"
              value={form.ExpiryDateOfID}
              onChange={handleChange}
              size="medium"
            />
          </div>
        </div>
        <div className="affiliaterProof__button">
          <Button type="primary" success onClick={handleSubmit}>
            Next
          </Button>
        </div>
      </div>
    </>
  );
}



export default AffiliaterProof;