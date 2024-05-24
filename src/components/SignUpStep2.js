// src/components/SignUpStep2.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpStep2 = ({ user, setUser }) => {
  const [formData, setFormData] = useState({ address: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleNext = () => {
    setUser({ ...user, ...formData });
    navigate('/signup-step-3');
  };

  const handleBack = () => {
    navigate('/signup-step-1');
  };

  return (
    <div>
      <h2>Step 2/3: Enter Your Address</h2>
      <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
      <button onClick={handleBack}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default SignUpStep2;
