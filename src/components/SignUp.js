import React, { useState } from 'react';
import SignUpStep1 from './SignUpStep1';
import SignUpStep2 from './SignUpStep2';
import SignUpStep3 from './SignUpStep3';
import './SignUp.css';

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
  const submitForm = () => {
    // Submit form logic here
    alert('Order placed successfully!');
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
