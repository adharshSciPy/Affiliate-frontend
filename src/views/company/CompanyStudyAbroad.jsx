import React, { useState, useEffect } from "react";
import { Select, Button, Input } from "antd";
const { Option } = Select;
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import { useNotification } from "../../context/NotificationContext";
import { usePostServiceMutation, useEditServiceMutation, useGetServiceByIdQuery } from "../../features/api/serviceApiSlice"

function CompanyStudyAbroad() {
  const { logId } = useAuth()
  const { notification } = useNotification()
  const { id: serviceId } = useParams()
  const { data: existingService } = useGetServiceByIdQuery(serviceId, { skip: !serviceId })
  const [postService] = usePostServiceMutation()
  const [editService] = useEditServiceMutation()
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const [otherCategory, setOtherCategory] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (existingService) {
      setForm(existingService)
      setSelectedCategory(existingService.category)
    }
  }, [existingService])


  const handleCategoryChange = (value) => {
    if (value === "Other") {
      setIsOtherSelected(true);
      setSelectedCategory(value);
    } else {
      setIsOtherSelected(false);
      setSelectedCategory(value);
    }
  };

  console.log("companyId", logId);
  let companyId = logId;

  const handleFileChange = (event) => {
    setFile(event.target.files[0])
  };


  const fields = {
    category: "",
    image: "",
    title: "",
    courseDescription: "",
    duration: "",
    certificate: "",
    courseFee: "",
    offerFee: "",
    mode: "",
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

      const formData = new FormData();
      formData.append('category', selectedCategory === "Other" ? otherCategory : selectedCategory);
      formData.append('image', file);
      formData.append('title', form.title);
      formData.append('courseDescription', form.courseDescription);
      formData.append('duration', form.duration);
      formData.append('certificate', form.certificate);
      formData.append('courseFee', form.courseFee);
      formData.append('offerFee', form.offerFee);
      formData.append('addHeading', form.addHeading);
      formData.append('description', form.description);
      formData.append('mode', form.mode);


      let result;

      if (serviceId) {
        result = await editService({ serviceId, formData })
      }
      else {
        result = await postService({ companyId, formData })
      }

      if (result?.data) {
        notification(
          "success",
          serviceId ? "Updation Successfull" : "Registration Succesfull",
          result?.data?.message,
          "bottomRight"
        );
        setForm(fields);
        setFile(null);
        setSelectedCategory("");
        setOtherCategory("");
      }
    } catch (error) {
      notification(
        "error",
        serviceId ? "Updation Failed" : "Registration Failed",
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
            name="category"
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
              name="category"
              style={{ marginTop: "15px", width: 200, marginLeft: '5px' }}
              placeholder="Please specify"
              value={otherCategory}
              onChange={(e) => setOtherCategory(e.target.value)}
            />
          )}
        </div>
        <div className="studyabroad__container--input">
          <div className="studyabroad__container--label">
            <p>Image: </p>
          </div>
          <Input
            type="file"
            name="image"
            value={form.file}
            onChange={handleFileChange}
          />
        </div>
        <div className="studyabroad__container--input">
          <div className="studyabroad__container--label">
            <p>Course Name:</p>
          </div>
          <Input type="text" name="title" value={form.title} onChange={formChange} />
        </div>
        <div className="studyabroad__container--input">
          <div className="studyabroad__container--label">
            <p>Course Description: </p>
          </div>
          <Input type="text" name="courseDescription" value={form.courseDescription} onChange={formChange} />
        </div>
        <div className="studyabroad__container--input">
          <div className="studyabroad__container--label">
            <p>Course Duration: </p>
          </div>
          <Input type="text" name="duration" value={form.duration} onChange={formChange} />
        </div>
        <div className="studyabroad__container--input">
          <div className="studyabroad__container--label">
            <p>Certificate Offered: </p>
          </div>
          <Input type="text" name="certificate" value={form.certificate} onChange={formChange} />
        </div>
        <div className="studyabroad__container--input">
          <div className="studyabroad__container--label">
            <p>Course Fee: </p>
          </div>
          <Input type="text" name="courseFee" value={form.courseFee} onChange={formChange} />
        </div>
        <div className="studyabroad__container--input">
          <div className="studyabroad__container--label">
            <p>Offer Fee: </p>
          </div>
          <Input type="text" name="offerFee" value={form.offerFee} onChange={formChange} />
        </div>
        <div className="studyabroad__container--input">
          <div className="studyabroad__container--label">
            <p>Mode: </p>
          </div>
          <Input type="text" name="mode" value={form.mode} onChange={formChange} />
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
          <Input type="text" name="addHeading" value={form.addHeading} onChange={formChange} />
        </div>
        <div className="studyabroad__container--input">
          <div className="studyabroad__container--label">
            <p>Description: </p>
          </div>
          <Input type="text" name="description" value={form.description} onChange={formChange} />
        </div>
        <div className="studyabroad__container--button">
          <Button type="primary" success onClick={handleSubmit}>
            {serviceId ? 'Update' : 'Submit'}
          </Button>
        </div>

      </div>
    </div>
  );
}

export default CompanyStudyAbroad;
