// src/components/SignUpStep1.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpStep1 = ({ setUser }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleNext = () => {
    setUser(formData);
    navigate('/signup-step-2');
  };

  return (
    <div>
      <h2>Step 1/3: Enter Your Details</h2>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default SignUpStep1;
