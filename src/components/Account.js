import React, { useState } from 'react';
import './Account.css';

const Account = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    aboutYou: 'Just me',
    notifications: 'All'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSave = () => {
    // Logic to save user details
    alert('Account details saved successfully!');
  };

  return (
    <div className="account">
      <h2>Account Details</h2>
      <div className="form-group">
        <label>Name</label>
        <input type="text" name="name" value={userDetails.name} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" name="email" value={userDetails.email} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Phone Number</label>
        <input type="text" name="phone" value={userDetails.phone} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Address</label>
        <input type="text" name="address" value={userDetails.address} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" name="password" value={userDetails.password} onChange={handleChange} />
      </div>
      <h3>About You</h3>
      <div className="form-group">
        <label>Who are we serving?</label>
        <select name="aboutYou" value={userDetails.aboutYou} onChange={handleChange}>
          <option value="Just me">Just me</option>
          <option value="Couple">Couple</option>
          <option value="Family">Family</option>
        </select>
      </div>
      <h3>Text Notification Preferences</h3>
      <div className="form-group">
        <label>Notifications</label>
        <select name="notifications" value={userDetails.notifications} onChange={handleChange}>
          <option value="All">All (promotional, scheduling, and service)</option>
          <option value="Scheduling and service only">Scheduling and service only</option>
          <option value="Service only">Service only</option>
          <option value="None">None</option>
        </select>
      </div>
      <button className="save-button" onClick={handleSave}>Save Account Details</button>
    </div>
  );
};

export default Account;
