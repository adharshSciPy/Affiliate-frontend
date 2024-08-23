import React, { useState, useEffect } from 'react';
import { Select, Input, Button } from 'antd';
const { Option } = Select;
import useAuth from '../../hooks/useAuth';
import { useParams } from 'react-router-dom';
import { useNotification } from '../../context/NotificationContext';
import { usePostServiceMutation, useEditServiceMutation, useGetServiceByIdQuery } from '../../features/api/serviceApiSlice';

function CompanyCourses() {
  const { logId } = useAuth()
  const { notification } = useNotification()
  const { id: serviceId } = useParams()
  const [postService] = usePostServiceMutation()
  const [updateService] = useEditServiceMutation();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const [otherCategory, setOtherCategory] = useState('');
  const [file, setFile] = useState(null)
  // const serviceId = params?.id
  const { data: existingService } = useGetServiceByIdQuery(serviceId, { skip: !serviceId });


  console.log('serviceId', serviceId);

  useEffect(() => {
    if (existingService) {
      setForm(existingService);
      setSelectedCategory(existingService.category);
    }
  }, [existingService]);

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

  const handleFileChange = (event) => {
    setFile(event.target.files[0])
  }

  const fields = {
    category: '',
    image: '',
    title: '',
    courseDescription: '',
    duration: '',
    certificate: '',
    courseFee: '',
    offerFee: '',
    mode: '',
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

      const formData = new FormData();
      formData.append('category', selectedCategory === 'Other' ? otherCategory : selectedCategory)
      formData.append('image', file)
      formData.append('title', form.title)
      formData.append('courseDescription', form.courseDescription)
      formData.append('duration', form.duration)
      formData.append('certificate', form.certificate)
      formData.append('courseFee', form.courseFee)
      formData.append('offerFee', form.offerFee)
      formData.append('mode', form.mode)
      formData.append('addHeading', form.addHeading)
      formData.append('description', form.description)


      let companyId = logId;
      let result;
      console.log('companyId', companyId)

      if (serviceId) {
        result = await updateService({ serviceId, formData });
      } else {
        result = await postService({ companyId, formData });
      }

      console.log("result", result);
      if (result?.data) {
        notification(
          "success",
          serviceId ? "Updated Successfull" : "Registration Succesfull",
          result?.data?.message,
          "bottomRight"
        );
        setForm(fields);
        setSelectedCategory('')
        setFile(null)
        setOtherCategory('')
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
    <div className='course'>
      <div className='course__container'>
        <div className="course__container--input">
          <div className="course__container--label">
            <p>Course Category: {' '}</p>
          </div>

          <Select
            style={{ width: 200 }}
            name="category"
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
              name='category'
              style={{ marginTop: "15px", width: 200, marginLeft: '5px' }}
              placeholder="Please specify"
              value={otherCategory}
              onChange={handleOtherCategoryChange}
            />
          )}


        </div>
        <div className="course__container--input">
          <div className="course__container--label">
            <p>Image: {' '}</p>
          </div>
          <Input type='file' name='image' value={form.file} onChange={handleFileChange} />
        </div>

        <div className="course__container--input">
          <div className="course__container--label">
            <p>Course Name:</p>
          </div>
          <Input type='text' name='title' value={form.title} onChange={formChange} />
        </div>

        <div className="course__container--input">
          <div className="course__container--label">
            <p>Course Description:</p>
          </div>
          <Input type='text' name='courseDescription' value={form.courseDescription} onChange={formChange} />
        </div>

        <div className="course__container--input">
          <div className="course__container--label">
            <p>Course Duration:</p>
          </div>
          <Input type='text' name='duration' value={form.duration} onChange={formChange} />
        </div>

        <div className="course__container--input">
          <div className="course__container--label">
            <p>Certificate Offered:</p>
          </div>
          <Input type='text' name='certificate' value={form.certificate} onChange={formChange} />
        </div>

        <div className="course__container--input">
          <div className="course__container--label">
            <p>Course Fee:</p>
          </div>
          <Input type='text' name='courseFee' value={form.courseFee} onChange={formChange} />
        </div>

        <div className="course__container--input">
          <div className="course__container--label">
            <p>Offer Fee:</p>
          </div>
          <Input type='text' name='offerFee' value={form.offerFee} onChange={formChange} />
        </div>

        <div className="course__container--input">
          <div className="course__container--label">
            <p>Mode:</p>
          </div>
          <Input type='text' name='mode' value={form.mode} onChange={formChange} />
        </div>

        <div className="course__container--input">
          <div className="course__container--label">
            <p style={{ fontSize: '20px', fontWeight: '700', color: 'var(--primary-color)' }}>Syllabus</p>
            <p>Add Heading:</p>
          </div>
          <Input type='text' name='addHeading' value={form.addHeading} onChange={formChange} />
        </div>

        <div className="course__container--input">
          <div className="course__container--label">
            <p>Description:</p>
          </div>
          <Input type='text' name='description' value={form.description} onChange={formChange} />
        </div>

        <div className="studyabroad__container--button">
          <Button type="primary" success onClick={handleSubmit}>
            {serviceId ? 'Update' : 'Submit'}
          </Button>
        </div>

      </div>
    </div >
  );
}

export default CompanyCourses;
