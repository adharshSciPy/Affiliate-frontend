import { React, useState } from "react";
import { Input, Button } from "antd";
//import { usePersonalInformationMutation } from "../../features/api/companyApiSlice";
import { useNotification } from "../../context/NotificationContext";
import useAuth from "../../hooks/useAuth";

function AffiliaterProof() {
  const { TextArea } = Input;
  const { notification } = useNotification();
  const { logId } = useAuth();
  const fields = {
    ValidID: "",
    IDNumber: "",
    ExpiryDateOfID: "",
    BankStatement: "",
    UtilityBill: "",
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
        ValidID: form.ValidID,
        IDNumber: form.IDNumber,
        ExpiryDateOfID: form.ExpiryDateOfID,
        BankStatement: form.BankStatement,
        UtilityBill: form.UtilityBill,
      };
      let userId = logId;
      const result = await personaldetails({ userId, payload });
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
            <p>Valid ID</p>
          </div>
          <Input
            placeholder="8768669"
            name="ValidID"
            value={form.ValidID}
            onChange={handleChange}
            size="medium"
          />
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
        <div className="affiliaterProof__container--input">
          <div className="affiliaterProof__container--label">
            <p>Bank Statement</p>
          </div>
          <Input
            placeholder="lhggiyouou"
            name="BankStatement"
            value={form.BankStatement}
            onChange={handleChange}
            size="medium"
          />
        </div>
        <div className="affiliaterProof__container--input">
          <div className="affiliaterProof__container--label">
            <p>Utility Bill</p>
          </div>
          <Input
            placeholder="ft678987"
            name="UtilityBill"
            value={form.UtilityBill}
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