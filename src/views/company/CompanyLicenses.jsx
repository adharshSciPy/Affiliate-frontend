import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import { usePersonalInformationMutation } from "../../features/api/companyApiSlice";
import { useNotification } from "../../context/NotificationContext";
import useAuth from "../../hooks/useAuth";
function CompanyLicenses() {
  const { notification } = useNotification();
  const [personaldetails] = usePersonalInformationMutation();
  const { logId } = useAuth();
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
  //handlesubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ArticlesOfIncorporation: form.ArticlesOfIncorporation,
        ArticlesOfOrganization: form.ArticlesOfOrganization,
        PartnershipAgreement: form.PartnershipAgreement,
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
    <div className="companylicenses">
      <div className="companylicenses__tabs">
        <p>
          Articles Of Incorporation(or Certificate Of Incorporation) :{" "}
          <Upload {...props}>
            <Button style={{ marginLeft: "5px" }} icon={<UploadOutlined />}>
              Upload
            </Button>
          </Upload>{" "}
        </p>
        <p>
          Articles Of Organization(or Certificate Of Organization) :{" "}
          <Upload {...props}>
            <Button style={{ marginLeft: "5px" }} icon={<UploadOutlined />}>
              Upload
            </Button>
          </Upload>{" "}
        </p>
        <p>
          Partnership Agreement :{" "}
          <Upload {...props}>
            <Button style={{ marginLeft: "5px" }} icon={<UploadOutlined />}>
              Upload
            </Button>
          </Upload>{" "}
        </p>
        <div className="companylicenses__tabs--button">
          <Button type="primary" success onClick={handleSubmit}>
            Next
          </Button>
        </div>


      </div>
    </div>
  );
}

export default CompanyLicenses;
