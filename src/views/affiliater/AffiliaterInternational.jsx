import { React, useState } from "react";
import { Input, Button } from "antd";
import { useNotification } from "../../context/NotificationContext";
import { useInternationalBankDetailsMutation } from "../../features/api/affiliaterApiSlice";
import useAuth from "../../hooks/useAuth";

function affiliaterInternational() {
  const { notification } = useNotification();
  const [internationalBankDetails] = useInternationalBankDetailsMutation()
  const { loggedInUserId } = useAuth();

  const fields = {
    bankName: "",
    holderName: "",
    accountNumber: "",
    IBAN: "",
    BIC: "",
    UPINumber: ""
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
        bankName: form.bankName,
        holderName: form.holderName,
        accountNumber: form.accountNumber,
        IBAN: form.IBAN,
        BIC: form.BIC,
        UPINumber: form.UPINumber
      };
      let affiliaterId = loggedInUserId;
      const result = await internationalBankDetails({ affiliaterId, payload });
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
      <div className="affiliaterinternational">
        <div className="affiliaterinternational__container">
          <div className="affiliaterinternational__container--input">
            <div className="affiliaterinternational__container--label">
              <p>Bank Name</p>
            </div>
            <Input
              placeholder="Bank of Example"
              name="bankName"
              value={form.bankName}
              onChange={handleChange}
              size="medium"
            />
          </div>
          <div className="affiliaterinternational__container--input">
            <div className="affiliaterinternational__container--label">
              <p>Account Holder's Name</p>
            </div>
            <Input
              placeholder="John Doe"
              name="holderName"
              value={form.holderName}
              onChange={handleChange}
              size="medium"
            />
          </div>
          <div className="affiliaterinternational__container--input">
            <div className="affiliaterinternational__container--label">
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
          <div className="affiliaterinternational__container--input">
            <div className="affiliaterinternational__container--label">
              <p>IBAN( International Bank )</p>
            </div>
            <Input
              placeholder="XX00 0000 0000 "
              name="IBAN"
              value={form.IBAN}
              onChange={handleChange}
              size="medium"
            />
          </div>
          <div className="affiliaterinternational__container--input">
            <div className="affiliaterinternational__container--label">
              <p>SWIFT/BIC Code</p>
            </div>
            <Input
              placeholder="XXXXXXYY"
              name="BIC"
              value={form.BIC}
              onChange={handleChange}
              size="medium"
            />
          </div>
        </div>
        <div className="affiliaterinternational__button">
          <Button type="primary" success onClick={handleSubmit}>
            Next
          </Button>
        </div>
      </div>
    </>
  );
}

export default affiliaterInternational;
