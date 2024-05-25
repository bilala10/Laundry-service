import React, { useState } from 'react';
import SignUpStep1 from './SignUpStep1';
import SignUpStep2 from './SignUpStep2';
import SignUpStep3 from './SignUpStep3';
import './SignUp.css';
import { registerUser } from '../api';

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
      console.log('Submitting form data:', formData);
      const response = await registerUser({
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        password: formData.password,
        phone: formData.phoneNumber,
        address: formData.address,
        aptNumber: formData.aptNumber,
        instructions: formData.instructions,
        services: formData.services,
        pickupDate: formData.pickupDate,
      });
      console.log('User registered successfully:', response);
      alert('Order placed successfully!');
    } catch (error) {
      console.error('There was an error registering the user:', error);
      if (error.response) {
        console.error('Error response:', error.response.data);
        alert(`There was an error registering the user: ${error.response.data.message}`);
      } else if (error.request) {
        console.error('Error request:', error.request);
        alert('There was an error registering the user: No response received from the server.');
      } else {
        console.error('Error message:', error.message);
        alert(`There was an error registering the user: ${error.message}`);
      }
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
