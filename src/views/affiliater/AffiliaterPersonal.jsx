import { React, useState } from "react";
import { Input, Button } from "antd";
import { useAffiliaterInformationMutation } from "../../features/api/affiliaterApiSlice";
import { useNotification } from "../../context/NotificationContext";
import useAuth from "../../hooks/useAuth";

function AffiliaterPersonal() {
  const { TextArea } = Input;
  const [personaldetails] = useAffiliaterInformationMutation();
  const { notification } = useNotification();
  const { loggedInUserId } = useAuth();

  const fields = {
    firstName: "",
    lastName: "",
    DOB: "",
    gender: "",
    nationality: "",
    email: "",
    phoneNumber: "",
    portfolio: "",
    address: "",
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
        firstName: form.firstName,
        lastName: form.lastName,
        DOB: form.DOB,
        gender: form.gender,
        nationality: form.nationality,
        email: form.email,
        phoneNumber: form.phoneNumber,
        portfolio: form.portfolio,
        address: form.address,
      };
      let affiliaterId = loggedInUserId;
      const result = await personaldetails({ affiliaterId, payload });
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
      <div className="affiliaterpersonal">
        <div className="affiliaterpersonal__containers">
          <div className="affiliaterpersonal__containerone">
            <div className="affiliaterpersonal__containerone--input">
              <div className="affiliaterpersonal__containerone--label">
                <p>First Name</p>
              </div>
              <div>
                <Input
                  placeholder="John"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  size="medium"
                />
              </div>
            </div>

            <div className="affiliaterpersonal__containerone--input">
              <div className="affiliaterpersonal__containerone--label">
                <p>Date of Birth</p>
              </div>
              <div>
                <Input
                  placeholder="dd/mm/yyyy"
                  name="DOB"
                  value={form.DOB}
                  onChange={handleChange}
                  size="medium"
                />
              </div>
            </div>

            <div className="affiliaterpersonal__containerone--input">
              <div className="affiliaterpersonal__containerone--label">
                <p>Gender</p>
              </div>
              <div>
                <Input
                  placeholder="Male/Female"
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  size="medium"
                />
              </div>
            </div>
            <div className="affiliaterpersonal__containerone--input">
              <div className="affiliaterpersonal__containerone--label">
                <p>Nationality</p>
              </div>
              <div>
                <Input
                  placeholder="Indian"
                  name="nationality"
                  value={form.nationality}
                  onChange={handleChange}
                  size="medium"
                />
              </div>
            </div>

            <div className="affiliaterpersonal__containerone--input">
              <div className="affiliaterpersonal__containerone--label">
                <p>Address</p>
              </div>
              <div>
                <TextArea
                  placeholder="John"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  size="medium"
                  rows={4}
                />
              </div>
            </div>
          </div>
          <div className="affiliaterpersonal__containertwo">
            <div className="affiliaterpersonal__containertwo--input">
              <div className="affiliaterpersonal__containertwo--label">
                <p>Last Name</p>
              </div>
              <div>
                <Input
                  placeholder="Doe"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  size="medium"
                />
              </div>
            </div>
            <div className="affiliaterpersonal__containertwo--input">
              <div className="affiliaterpersonal__containertwo--label">
                <p>Phone Number</p>
              </div>
              <div>
                <Input
                  placeholder="9874445631"
                  name="phoneNumber"
                  value={form.phoneNumber}
                  onChange={handleChange}
                  size="medium"
                />
              </div>
            </div>
            <div className="affiliaterpersonal__containertwo--input">
              <div className="affiliaterpersonal__containertwo--label">
                <p>Email address</p>
              </div>
              <div>
                <Input
                  placeholder="example@gmail.com"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  size="medium"
                />
              </div>
            </div>
            <div className="affiliaterpersonal__containertwo--input">
              <div className="affiliaterpersonal__containertwo--label">
                <p>Portfolio</p>
              </div>
              <div>
                <Input
                  placeholder="example@gmail.com"
                  name="portfolio"
                  value={form.portfolio}
                  onChange={handleChange}
                  size="medium"
                />
              </div>
            </div>
            <div className="affiliaterpersonal__containertwo--button">
              <Button type="primary" success onClick={handleSubmit}>
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AffiliaterPersonal;
