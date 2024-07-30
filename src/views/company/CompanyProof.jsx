import { React, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Input, Button, message, Upload } from "antd";
import { usePersonalInformationMutation } from "../../features/api/companyApiSlice";
import { useNotification } from "../../context/NotificationContext";
import useAuth from "../../hooks/useAuth";

function CompanyProof() {
  const { notification } = useNotification();
  const [personaldetails] = usePersonalInformationMutation();
  const { logId } = useAuth();
  const fields = {
    idNumber: "",
    ExpiryDateOfId: "",
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
        idNumber: form.idNumber,
        ExpiryDateOfId: form.ExpiryDateOfId,
      };
      let companyId = logId;
      const result = await personaldetails({ companyId, payload });
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

  const props = {
    name: "file",
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div className="companyproof">
      <div className="companyproof__tabs">
        <p>
          Documentation :{" "}
          <Upload {...props}>
            <Button style={{ marginLeft: "5px" }} icon={<UploadOutlined />}>
              Upload
            </Button>
          </Upload>{" "}
        </p>
        <p>
          Utility bills :{" "}
          <Upload {...props}>
            <Button style={{ marginLeft: "5px" }} icon={<UploadOutlined />}>
              Upload
            </Button>
          </Upload>{" "}
        </p>
        <p>
          Bank Statement :{" "}
          <Upload {...props}>
            <Button style={{ marginLeft: "5px" }} icon={<UploadOutlined />}>
              Upload
            </Button>
          </Upload>{" "}
        </p>

        <div className="companyproof__tabs--input">
          <div className="companyproof__tabs--label">
            <p>ID Number</p>
          </div>
          <Input
            placeholder="8767564"
            name="ID Number"
            value={form.idNumber}
            onChange={handleChange}
            size="medium"
          />
        </div>
        <div className="companyproof__tabs--input">
          <div className="companyproof__tabs--label">
            <p>Expiry Date Of ID</p>
          </div>
          <Input
            placeholder="mm/dd/year"
            name="Expiry Date Of ID"
            value={form.ExpiryDateOfId}
            onChange={handleChange}
            size="medium"
          />
        </div>
        <div className="companyproof__tabs--button">
          <Button type="primary" success onClick={handleSubmit}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CompanyProof;
