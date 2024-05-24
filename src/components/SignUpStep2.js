import React from 'react';
import './SignUpStep2.css';

const SignUpStep2 = ({ formData, setFormData, nextStep, prevStep }) => {
  return (
    <div className="signup-step-container">
      <h2>Where should we pick up your clothes?</h2>
      <div className="form-group">
        <input 
          type="text" 
          placeholder="Address" 
          value={formData.address} 
          onChange={(e) => setFormData({ ...formData, address: e.target.value })} 
        />
        <input 
          type="text" 
          placeholder="Apt # (Optional)" 
          value={formData.aptNumber} 
          onChange={(e) => setFormData({ ...formData, aptNumber: e.target.value })} 
        />
        <input 
          type="text" 
          placeholder="Pickup and delivery instructions" 
          value={formData.instructions} 
          onChange={(e) => setFormData({ ...formData, instructions: e.target.value })} 
        />
      </div>
      <button className="prev-btn" onClick={prevStep}>Back</button>
      <button className="next-btn" onClick={nextStep}>Continue</button>
    </div>
  );
};

export default SignUpStep2;
