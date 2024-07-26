import { React, useState } from "react";
import { Input, Button } from "antd";
import { useNotification } from "../../context/NotificationContext";
import useAuth from "../../hooks/useAuth";

function affiliaterDomestic() {
  const { notification } = useNotification();
  const { logId } = useAuth();

  const fields = {
    bankName: "",
    accountHolderName: "",
    accountNumber: "",
    bankbranch: "",
    branchCode: "",
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
        bankName: form.bankName,
        accountHolderName: form.accountHolderName,
        accountNumber: form.accountNumber,
        bankbranch: form.bankbranch,
        branchCode: form.branchCode,
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
      <div className="affiliaterdomestic">
        <div className="affiliaterdomestic__container">
          <div className="affiliaterdomestic__container--input">
            <div className="affiliaterdomestic__container--label">
              <p>Bank Name</p>
            </div>
            <Input
              placeholder="Bank of Example"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              size="medium"
            />
          </div>
          <div className="affiliaterdomestic__container--input">
            <div className="affiliaterdomestic__container--label">
              <p>Account Holder's Name</p>
            </div>
            <Input
              placeholder="John Doe"
              name="accountHolderName"
              value={form.accountHolderName}
              onChange={handleChange}
              size="medium"
            />
          </div>
          <div className="affiliaterdomestic__container--input">
            <div className="affiliaterdomestic__container--label">
              <p>Account Number</p>
            </div>
            <Input
              placeholder="1234 5678 9012 3456"
              name="accountNumber"
              value={form.accountNumber}
              onChange={handleChange}
              size="medium"
            />
          </div>
          <div className="affiliaterdomestic__container--input">
            <div className="affiliaterdomestic__container--label">
              <p>Bank Branch</p>
            </div>
            <Input
              placeholder="Main Branch"
              name="bankBranch"
              value={form.bankbranch}
              onChange={handleChange}
              size="medium"
            />
          </div>
          <div className="affiliaterdomestic__container--input">
            <div className="affiliaterdomestic__container--label">
              <p>Branch Code/IFSC Code</p>
            </div>
            <Input
              placeholder="IFSC0001234"
              name="branchCode"
              value={form.branchCode}
              onChange={handleChange}
              size="medium"
            />
          </div>
        </div>
        <div className="affiliaterdomestic__button">
              <Button type="primary" success onClick={handleSubmit}>
                Next
              </Button>
            </div>
      </div>
    </>
  );
}

export default affiliaterDomestic;
