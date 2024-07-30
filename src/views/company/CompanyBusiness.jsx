import { React, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Input, Button, message, Upload } from "antd";
import { usePersonalInformationMutation } from "../../features/api/companyApiSlice";
import { useNotification } from "../../context/NotificationContext";
import useAuth from "../../hooks/useAuth";

function CompanyBusiness() {
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
  const { TextArea } = Input;
  const [personaldetails] = usePersonalInformationMutation();
  const { notification } = useNotification();
  const { logId } = useAuth();

  const fields = {
    companyName: "",
    registrationNumber: "",
    addressOfTheCompany: "",
    natureOfBusiness: "",
    listOfDirectors: "",
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
        registrationNumber: form.registrationNumber,
        addressOfTheCompany: form.addressOfTheCompany,
        natureOfBusiness: form.natureOfBusiness,
        listOfDirectors: form.listOfDirectors,
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
              name="registrationNumber"
              value={form.registrationNumber}
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
              name="addressOfTheCompany"
              value={form.addressOfTheCompany}
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
              name="natureOfBusiness"
              value={form.natureOfBusiness}
              onChange={handleChange}
              size="medium"
            />
          </div>
          <div className="companybusiness__container--input">
            <p>
              Financial Statments :{" "}
              <Upload {...props}>
                <Button style={{ marginLeft: "5px" }} icon={<UploadOutlined />}>
                  Upload
                </Button>
              </Upload>{" "}
            </p>
          </div>
          <div className="companybusiness__container--input">
            <div className="companybusiness__container--label">
              <p>List Of Directors and Beneficial Owners</p>
            </div>
            <TextArea
              placeholder="List Of Directors"
              name="listOfDirectors"
              value={form.listOfDirectors}
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
