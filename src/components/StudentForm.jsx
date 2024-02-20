// StudentForm.jsx
import React, { useState } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import CountryPhoneCodeInput from './CountryPhoneCodeInput';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormInput from './FormInput';
import FormCheckbox from './FormCheckbox';
import FormSelect from './FormSelect';
import FormFileInput from './FormFileInput';
import FormButton from './FormButton';
import DateInput from './DateInput';
import { countries } from 'countries-list';
import { BsFillXCircleFill } from 'react-icons/bs';
import CountrySelector from './CountrySelector';
import BASE_URL from '../services/base_url';
import FormRadio from './FormRadio';

function StudentForm() {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    email: '',
    gender: '',
    courses: [],
    courseMethod: [],
    dob: '',
    profilePhoto: null,
    idCards: [],
    country: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  

  function handleCourseChange(selectedOptions) {
    setFormData({
      ...formData,
      courses: selectedOptions.map((option) => option.value),
    });
  }

  function handleCourseMethodChange(methodName, isChecked) {
    let updatedCourseMethods;
    if (isChecked) {
      updatedCourseMethods = [...formData.courseMethod, methodName];
    } else {
      updatedCourseMethods = formData.courseMethod.filter(method => method !== methodName);
    }
  
    setFormData({
      ...formData,
      courseMethod: updatedCourseMethods,
    });
  }

  function handleFileChange(e) {
    const { name, files } = e.target;
    if (name === 'profilePhoto') {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        idCards: [...formData.idCards, ...Array.from(files)],
      });
    }
  }

  function removeIdCard(index) {
    const updatedIdCards = [...formData.idCards];
    updatedIdCards.splice(index, 1);
    setFormData({
      ...formData,
      idCards: updatedIdCards,
    });
  }

  const handleCountryChange = (countryCode) => {
    const fullCountryName = countries[countryCode].name;
    setFormData({
      ...formData,
      country: fullCountryName,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
  
    const requiredFields = ['name', 'mobileNumber', 'email', 'gender', 'dob', 'profilePhoto', 'country'];
    let missingFields = [];
  
    if (formData.courses.length === 0) {
      missingFields.push('courses');
    }
  
    if (formData.courseMethod.length === 0) {
      missingFields.push('courseMethod');
    }
  
    if (!formData.dob) {
      missingFields.push('dob');
    }
  
    if (formData.idCards.length === 0) {
      missingFields.push('idCards');
    }
  
    missingFields = missingFields.concat(requiredFields.filter(field => !formData[field]));
  
    if (missingFields.length > 0) {
      toast.error(`Please fill in the following fields: ${missingFields.join(', ')}`);
    } else {
      console.log('Form Data:', formData); // Log the formData object
    }
  }
  

  return (
    <div className="container p-3 ">
      <ToastContainer />
      <Row>
        <Col sm={3}></Col>
        
        <Col className='form-container p-5 bg-light' sm={6} style={{  borderRadius: "50px" }}>
          <h2>Student Registration Form</h2>
          <Form onSubmit={handleSubmit}>
            <FormInput label="Student Name" name="name" value={formData.name} onChange={handleChange} />
            <CountryPhoneCodeInput value={formData.mobileNumber} onChange={(value) => setFormData({...formData, mobileNumber: value})} />
            <FormInput label="Email" name="email" value={formData.email} onChange={handleChange} />
            <FormRadio 
              label="Gender" 
              name="gender" 
              value={formData.gender} 
              onChange={handleChange} 
            />
            <FormSelect 
              label="Courses" 
              name="courses" 
              value={formData.courses} 
              options={[{ value: 'math', label: 'Math' }, { value: 'science', label: 'Science' }, { value: 'english', label: 'English' }]} 
              onChange={handleCourseChange} 
            />
            <FormCheckbox 
              label="Course Method"
              name="courseMethod"
              value={formData.courseMethod}
              onChange={handleCourseMethodChange}
              options={[
                { value: 'online', label: 'Online' },
                { value: 'offline', label: 'Offline' },
                { value: 'hybrid', label: 'Hybrid' },
              ]}
            />

            <DateInput label="DOB" name="dob" value={formData.dob} onChange={handleChange} />

            <FormFileInput label="Profile Photo" name="profilePhoto" onChange={handleFileChange} />
            <Form.Group controlId="idCards">
              <Form.Label>ID Cards:</Form.Label>
              {formData.idCards.map((idCard, index) => (
                <Row key={index}>
                  <Col>{idCard.name}</Col>
                  <Col><Button variant="danger" size="sm" onClick={() => removeIdCard(index)}><BsFillXCircleFill /></Button></Col>
                </Row>
              ))}
            </Form.Group>
            <FormFileInput label="Upload ID Card" name="idCards" onChange={handleFileChange} multiple />
            <CountrySelector onSelectCountry={handleCountryChange} />
            <FormButton  type="submit" />
          </Form>
        </Col>
        <Col sm={3}></Col>
      </Row>
    </div>
  );
}

export default StudentForm;
