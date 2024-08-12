import React, { useState } from "react";
import { Select, Button, Input, Descriptions } from "antd";
const { options } = Select;

function CompanyStudyAbroad() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const [otherCategory, setOtherCategory] = useState("");
  const handleCategoryChange = (value) => {
    if (value === "Other") {
      setIsOtherSelected(true);
      setSelectedCategory(value);
    } else {
      setIsOtherSelected(false);
      setSelectedCategory(value);
    }
  };

  const handleOtherCategoryChange = (event) => {
    setOtherCategory(event.target.value);
  };

  const [files, setFiles] = useState({
    image: null,
  });

  const handleChange = (field) => (event) => {
    setFiles((prevFiles) => ({
      ...prevFiles,
      [field]: event.target.files[0],
    }));
  };
  const fields = {
    courseCategory: "",
    courseName: "",
    courseDescription: "",
    courseDuration: "",
    certificateOffered: "",
    courseFee: "",
    offerFee: "",
    addHeading: "",
    description: "",
  };
  const [form, setForm] = useState(fields);
  const formChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  //handlesubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        courseCategory: form.courseCategory,
        courseName: form.courseName,
        courseDescription:form.courseDescription,
        courseDuration:form.courseDuration,
        certificateOffered:form.certificateOffered,
        courseFee:form.courseFee,
        offerFee:form.offerFee,
        addHeading:form.addHeading,
        description:form.description,
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
    <div className="studyabroad">
      <div className="studyabroad__container">
        <div className="studyabroad__container--input">
          <div className="studyabroad__container--label">
            <p>Course Category:</p>
          </div>
          <Select
            style={{ width: 200 }}
            placeholder="Select a Category"
            onChange={handleCategoryChange}
            value={selectedCategory || undefined}
          >
            <Option value="Computer Science">Computer Science</Option>
            <Option value="Engineering">Engineering</Option>
            <Option value="Business Administration">
              Business Administration
            </Option>
            <Option value="Accounting">Accounting</Option>
            <Option value="Other">Other</Option>
          </Select>
          {isOtherSelected && (
            <Input
              type="text"
              name="courseCategory"
              // style={{ marginTop: "10px", width: 200, marginLeft: "116px" }}
              placeholder="Please specify"
              value={otherCategory}
              onChange={handleOtherCategoryChange}
            />
          )}
        </div>
         <div className="studyabroad__container--input">
          <div className="studyabroad__container--label">
            <p>Image: </p>
          </div>
          <Input
            // style={{ width: "300px" }}
            type="file"
            name="uploads"
            onChange={handleChange("image")}
          />
        </div> 
        <div className="studyabroad__container--input">
          <div className="studyabroad__container--label">
            <p>Course Name:</p>
          </div>
          <Input type="text" name="courseName" onChange={formChange} />
        </div>
        <div className="studyabroad__container--input">
          <div className="studyabroad__container--label">
            <p>Course Description: </p>
          </div>
          <Input type="text" name="courseDescription" onChange={formChange} />
        </div>
        <div className="studyabroad__container--input">
          <div className="studyabroad__container--label">
            <p>Course Duration: </p>
          </div>
          <Input type="text" name="courseDuration" onChange={formChange} />
        </div>
        <div className="studyabroad__container--input">
          <div className="studyabroad__container--label">
            <p>Certificate Offered: </p>
          </div>
          <Input type="text" name="certificateOffered" onChange={formChange} />
        </div>
        <div className="studyabroad__container--input">
          <div className="studyabroad__container--label">
            <p>Course Fee: </p>
          </div>
          <Input type="text" name="courseFee" onChange={formChange} />
        </div>
        <div className="studyabroad__container--input">
          <div className="studyabroad__container--label">
            <p>Offer Fee: </p>
          </div>
          <Input type="text" name="offerFee" onChange={formChange} />
        </div>
        <p
          style={{
            fontSize: "20px",
            fontWeight: "700",
            color: "var(--primary-color)",
          }}
        >
          Syllabus
        </p>
        <div className="studyabroad__container--input">
          <div className="studyabroad__container--label">
            <p>Add Heading: </p>
          </div>
          <Input type="text" name="addHeading" onChange={formChange} />
        </div>
        <div className="studyabroad__container--input">
          <div className="studyabroad__container--label">
            <p>Description: </p>
          </div>
          <Input type="text" name="description" onChange={formChange} />
        </div>
        <div className="studyabroad__container--button">
        <Button type="primary" success onClick={handleSubmit}>
            Submit
          </Button>
        </div>
        
      </div>
    </div>
  );
}

export default CompanyStudyAbroad;
