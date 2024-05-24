// src/components/SignUpStep3.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';

const SignUpStep3 = ({ user, setUser, createOrder }) => {
  const [formData, setFormData] = useState({ services: [], pickupDate: new Date() });
  const navigate = useNavigate();

  const handleServiceChange = (service) => {
    setFormData((prevData) => ({
      ...prevData,
      services: prevData.services.includes(service)
        ? prevData.services.filter((s) => s !== service)
        : [...prevData.services, service],
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({ ...prevData, pickupDate: date }));
  };

  const handleOrder = () => {
    setUser({ ...user, ...formData });
    createOrder({ ...user, ...formData });
    navigate('/order-form');
  };

  const handleBack = () => {
    navigate('/signup-step-2');
  };

  return (
    <div>
      <h2>Step 3/3: Select Your Services and Pickup Date</h2>
      <div>
        <label>
          <input type="checkbox" onChange={() => handleServiceChange('Wash & Fold')} />
          Wash & Fold
        </label>
        <label>
          <input type="checkbox" onChange={() => handleServiceChange('Dry Cleaning')} />
          Dry Cleaning
        </label>
        <label>
          <input type="checkbox" onChange={() => handleServiceChange('Hang Dry')} />
          Hang Dry
        </label>
      </div>
      <Calendar onChange={handleDateChange} value={formData.pickupDate} />
      <button onClick={handleBack}>Back</button>
      <button onClick={handleOrder}>Place Order</button>
    </div>
  );
};

export default SignUpStep3;
