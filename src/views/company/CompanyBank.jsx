import { React, useState } from "react";
import { Input, Button } from "antd";
import { useNotification } from "../../context/NotificationContext";
import { useInternationalBankDetailsMutation } from "../../features/api/affiliaterApiSlice";
import useAuth from "../../hooks/useAuth";

function CompanyBank() {
  const { notification } = useNotification();
  const [internationalBankDetails] = useInternationalBankDetailsMutation();
  const { logId } = useAuth();

  const fields = {
    IFSCcode: "",
    accountNumber: "",
    UPInumber: "",
  };
  //input field onchange handler
  const [form, setForm] = useState(fields);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        IFSCcode: form.IFSCcode,
        accountNumber: form.accountNumber,
        UPInumber: form.UPInumber,
      };
      let companyId = logId;
      const result = await internationalBankDetails({ companyId, payload });
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
      <div className="companybank">
        <div className="companybank__container">
          <div className="companybank__container--input">
            <div className="companybank__container--label">
              <p>IFSC Code</p>
            </div>
            <Input
              placeholder="FGGXXXXX"
              name="IFSCcode"
              value={form.IFSCcode}
              onChange={handleChange}
              size="medium"
            />
          </div>
          <div className="companybank__container--input">
            <div className="companybank__container--label">
              <p>Account Number</p>
            </div>
            <Input
              placeholder="4512 4531 4585"
              name="accountNumber"
              value={form.accountNumber}
              onChange={handleChange}
              size="medium"
            />
          </div>
          <div className="companybank__container--input">
            <div className="companybank__container--label">
              <p>UPI Number</p>
            </div>
            <Input
              placeholder="1234XXX"
              name="UPInumber"
              value={form.UPInumber}
              onChange={handleChange}
              size="medium"
            />
          </div>
          <div className="companybank__button">
            <Button type="primary" success onClick={handleSubmit}>
              Next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompanyBank;
