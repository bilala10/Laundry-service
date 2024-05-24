import React from 'react';
import './SignUpStep1.css';

const SignUpStep1 = ({ formData, setFormData, nextStep }) => {
  return (
    <div className="signup-step-container">
      <h2>Let's get started!</h2>
      <div className="form-group">
        <input 
          type="text" 
          placeholder="First name" 
          value={formData.firstName} 
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} 
        />
        <input 
          type="text" 
          placeholder="Last name" 
          value={formData.lastName} 
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} 
        />
        <input 
          type="text" 
          placeholder="Phone number" 
          value={formData.phoneNumber} 
          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} 
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
        />
        <input 
          type="password" 
          placeholder="Create password" 
          value={formData.password} 
          onChange={(e) => setFormData({ ...formData, password: e.target.value })} 
        />
      </div>
      <button className="next-btn" onClick={nextStep}>Continue</button>
    </div>
  );
};

export default SignUpStep1;
