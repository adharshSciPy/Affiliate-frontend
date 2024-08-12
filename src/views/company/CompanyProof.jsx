import { React, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Input, Button, message, Upload } from "antd";
import { useIdentificationDetailsMutation } from "../../features/api/companyApiSlice";
import { useNotification } from "../../context/NotificationContext";
import useAuth from "../../hooks/useAuth";

function CompanyProof() {
  const { notification } = useNotification();
  const [identificationdetails] = useIdentificationDetailsMutation();
  const { logId } = useAuth();
  const fields = {
    IDNumber: "",
    ExpiryDateOfID: "",
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
        ExpiryDateOfID: form.ExpiryDateOfID,
      };
      let companyId = logId;
      console.log("companyId", companyId);
      console.log("payload", payload);
      const result = await identificationdetails({ companyId, payload });
      console.log("result", result);
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
    <div className="companyproof">
      <div className="companyproof__tabs">
        

        <div className="companyproof__tabs--input">
          <div className="companyproof__tabs--label">
            <p>ID Number</p>
          </div>
          <Input
            placeholder="8767564"
            name="IDNumber"
            value={form.IDNumber}
            onChange={handleChange}
            size="medium"
          />
        </div>
        <div className="companyproof__tabs--input">
          <div className="companyproof__tabs--label">
            <p>Expiry Date Of ID</p>
          </div>
          <Input
            placeholder="dd/mm/year"
            name="ExpiryDateOfID"
            value={form.ExpiryDateOfID}
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
