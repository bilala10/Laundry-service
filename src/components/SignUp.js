import React, { useState } from 'react';
import SignUpStep1 from './SignUpStep1';
import SignUpStep2 from './SignUpStep2';
import SignUpStep3 from './SignUpStep3';
import './SignUp.css';
import axios from 'axios';

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    address: '',
    aptNumber: '',
    instructions: '',
    services: [],
    pickupDate: '',
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const submitForm = async () => {
    try {
      const response = await axios.post('http://localhost:5002/api/auth/register', {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        password: formData.password,
        phone: formData.phoneNumber,
        address: formData.address,
        aptNumber: formData.aptNumber,
        instructions: formData.instructions,
      });
      if (response.data) {
        alert('Order placed successfully!');
        // Optionally, redirect to a different page or reset the form
      }
    } catch (error) {
      console.error('Error submitting form', error);
      alert('There was an error placing your order. Please try again.');
    }
  };

  switch (step) {
    case 1:
      return <SignUpStep1 formData={formData} setFormData={setFormData} nextStep={nextStep} />;
    case 2:
      return <SignUpStep2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
    case 3:
      return <SignUpStep3 formData={formData} setFormData={setFormData} prevStep={prevStep} submitForm={submitForm} />;
    default:
      return <SignUpStep1 formData={formData} setFormData={setFormData} nextStep={nextStep} />;
  }
};

export default SignUp;
