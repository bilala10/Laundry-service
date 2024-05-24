import React from 'react';
import './SignUpStep3.css';

const SignUpStep3 = ({ formData, setFormData, prevStep, submitForm }) => {
  const services = [
    { name: 'Wash & Fold', value: 'washFold' },
    { name: 'Dry Cleaning', value: 'dryCleaning' },
  ];

  const handleServiceClick = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service.value)
        ? prev.services.filter((s) => s !== service.value)
        : [...prev.services, service.value],
    }));
  };

  return (
    <div className="signup-step-container">
      <h2>Schedule your order</h2>
      <div className="form-group">
        {services.map((service) => (
          <div 
            key={service.value} 
            className={`service-box ${formData.services.includes(service.value) ? 'selected' : ''}`} 
            onClick={() => handleServiceClick(service)}
          >
            <h3>{service.name}</h3>
          </div>
        ))}
        <input 
          type="date" 
          value={formData.pickupDate} 
          onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })} 
        />
      </div>
      <button className="prev-btn" onClick={prevStep}>Back</button>
      <button className="next-btn" onClick={submitForm}>Place Order</button>
    </div>
  );
};

export default SignUpStep3;
