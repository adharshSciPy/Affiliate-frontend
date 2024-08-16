import React, { useState } from 'react';
import { Select, Input, Button } from 'antd';

const { Option } = Select;

function CompanyCourses() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const [otherCategory, setOtherCategory] = useState('');

  const handleCategoryChange = (value) => {
    if (value === 'Other') {
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
    image: null
  })

  const handleChange = (field) => (event) => {
    setFiles(prevFiles => ({
      ...prevFiles,
      [field]: event.target.files[0]
    }))
  }

  const fields = {
    courseCategory: '',
    courseName: '',
    courseDescription: '',
    courseDuration: '',
    certificateOffered: '',
    courseFee: '',
    offerFee: '',
    addHeading: '',
    description: ''
  }

  const [form, setForm] = useState(fields);
  const formChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

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
    <div className='course'>
      <div className='course__container'>
        <div className="course__container--input">
          <div className="course__container--label">
            <p>Course Category: {' '}

              <Select
                style={{ width: 200 }}
                placeholder="Select a Category"
                onChange={handleCategoryChange}
                value={selectedCategory || undefined}
              >
                <Option value="Medicine">Medicine</Option>
                <Option value="Engineering">Engineering</Option>
                <Option value="IT">IT</Option>
                <Option value="Commerce">Commerce</Option>
                <Option value="Other">Other</Option>
              </Select>

              {isOtherSelected && (
                <Input
                  type='text'
                  name='courseCategory'
                  style={{ marginTop: '10px', width: 200 }}
                  placeholder="Please specify"
                  value={otherCategory}
                  onChange={handleOtherCategoryChange}
                />
              )}
            </p>
          </div>
        </div>
        <div className="course__container--input">
          <div className="course__container--label">
            <p>Image: {' '}
              <Input style={{ width: '300px' }} type='file' name='uploads' onChange={handleChange('image')} />
            </p>
          </div>
        </div>

        <div className="course__container--input">
          <div className="course__container--label">
            <p>Course Name:
              <Input type='text' name='courseName' onChange={formChange} />
            </p>
          </div>
        </div>

        <div className="course__container--input">
          <div className="course__container--label">
            <p>Course Description:
              <Input type='text' name='courseDescription' onChange={formChange} />
            </p>
          </div>
        </div>

        <div className="course__container--input">
          <div className="course__container--label">
            <p>Course Duration:
              <Input type='text' name='courseDuration' onChange={formChange} />
            </p>
          </div>
        </div>

        <div className="course__container--input">
          <div className="course__container--label">
            <p>Certificate Offered:
              <Input type='text' name='certificateOffered' onChange={formChange} />
            </p>
          </div>
        </div>

        <div className="course__container--input">
          <div className="course__container--label">
            <p>Course Fee:
              <Input type='text' name='certificateOffered' onChange={formChange} />
            </p>
          </div>
        </div>

        <div className="course__container--input">
          <div className="course__container--label">
            <p>Offer Fee:
              <Input type='text' name='offerFee' onChange={formChange} />
            </p>
          </div>
        </div>

        <div className="course__container--input">
          <div className="course__container--label">
            <p style={{ fontSize: '20px', fontWeight: '700', color: 'var(--primary-color)' }}>Syllabus</p>
            <p>Add Heading:
              <Input type='text' name='addHeading' onChange={formChange} />
            </p>
          </div>
        </div>

        <div className="course__container--input">
          <div className="course__container--label">
            <p>Description:
              <Input type='text' name='description' onChange={formChange} />
            </p>
          </div>
        </div>

        <div className="studyabroad__container--button">
          <Button type="primary" success onClick={handleSubmit}>
            Submit
          </Button>
        </div>

      </div>
    </div >
  );
}

export default CompanyCourses;
