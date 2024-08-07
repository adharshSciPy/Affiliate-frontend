import { React, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Input, Button, message, Upload } from "antd";
import { useBusinessInformationMutation } from "../../features/api/companyApiSlice";
import { useNotification } from "../../context/NotificationContext";
import useAuth from "../../hooks/useAuth";

function CompanyBusiness() {

  const { TextArea } = Input;
  const [businessinfo] = useBusinessInformationMutation();
  const { notification } = useNotification();
  const { logId } = useAuth();


  const fields = {
    companyName: "",
    registerNumber: "",
    companyAddress: "",
    businessNature: "",
    listOfOwners: "",
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
        companyName: form.companyName,
        registerNumber: form.registerNumber,
        companyAddress: form.companyAddress,
        businessNature: form.businessNature,
        listOfOwners: form.listOfOwners,
      };
      let companyId = logId;
      console.log("id", companyId);
      console.log("payload", payload);
      const result = await businessinfo({ companyId, payload });
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
      <div className="companybusiness">
        <div className="companybusiness__container">
          <div className="companybusiness__container--input">
            <div className="companybusiness__container--label">
              <p>Company Name</p>
            </div>
            <Input
              placeholder="Company of Example"
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
              size="medium"
            />
          </div>
          <div className="companybusiness__container--input">
            <div className="companybusiness__container--label">
              <p>Registration Number</p>
            </div>
            <Input
              placeholder="4512 4512"
              name="registerNumber"
              value={form.registerNumber}
              onChange={handleChange}
              size="medium"
            />
          </div>
          <div className="companybusiness__container--input">
            <div className="companybusiness__container--label">
              <p>Address Of The Company</p>
            </div>
            <Input
              placeholder="XYZ Company"
              name="companyAddress"
              value={form.companyAddress}
              onChange={handleChange}
              size="medium"
            />
          </div>
          <div className="companybusiness__container--input">
            <div className="companybusiness__container--label">
              <p>Nature Of Business</p>
            </div>
            <Input
              placeholder="Business nature "
              name="businessNature"
              value={form.businessNature}
              onChange={handleChange}
              size="medium"
            />
          </div>
          <div className="companybusiness__container--input">
            <div className="companybusiness__container--label">
              <p>List Of Directors and Beneficial Owners</p>
            </div>
            <TextArea
              placeholder="List Of Directors"
              name="listOfOwners"
              value={form.listOfOwners}
              onChange={handleChange}
              size="medium"
              rows={4}
            />
          </div>
        </div>
        <div className="companybusiness__button">
          <Button type="primary" success onClick={handleSubmit}>
            Next
          </Button>
        </div>
      </div>
    </>
  );
}

export default CompanyBusiness;
