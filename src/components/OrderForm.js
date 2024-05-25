// src/components/OrderForm.js
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import API from '../api';
import './OrderForm.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
=======
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './OrderForm.css';
>>>>>>> 9924b045ac3cb7729dc4ef167cce99840456dcad

const OrderForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    street: '',
    apt: '',
    instructions: '',
    services: [],
    date: null,
  });
  const [showCalendar, setShowCalendar] = useState(false);
  const navigate = useNavigate();

<<<<<<< HEAD
  // Check for existing payment method
  useEffect(() => {
    const fetchPaymentMethod = async () => {
      try {
        const response = await API.get('/check-payment-method');
        setHasPaymentMethod(response.data);
      } catch (error) {
        console.error('Error fetching payment method', error);
      }
    };
    fetchPaymentMethod();
  }, []);
=======
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceClick = (service) => {
    setFormData({
      ...formData,
      services: formData.services.includes(service)
        ? formData.services.filter((s) => s !== service)
        : [...formData.services, service],
    });
  };

  const handleDateClick = (date) => {
    setFormData({ ...formData, date: date });
    setShowCalendar(false);
  };

  const handleContinueClick = () => {
    if (step === 3) {
      // Save the final data (send to API or local storage)
      console.log('Final Form Data: ', formData);
      // Redirect to home or account page after placing order
      navigate('/');
    } else {
      setStep(step + 1);
    }
  };

  const handleBackClick = () => {
    setStep(step - 1);
  };
>>>>>>> 9924b045ac3cb7729dc4ef167cce99840456dcad

  const services = [
    { name: 'Wash & Fold', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', value: 'washFold' },
    { name: 'Dry Cleaning', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', value: 'dryCleaning' },
    { name: 'Hang Dry', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', value: 'hangDry' }
  ];

<<<<<<< HEAD
  const handleServiceClick = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service.value)
        ? prev.filter((s) => s !== service.value)
        : [...prev, service.value]
    );
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  const handleContinueClick = () => {
    if (hasPaymentMethod) {
      handleConfirmPickup();
    } else {
      setShowPaymentForm(true);
    }
  };

  const handlePaymentSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      try {
        await API.post('/add-payment-method', paymentMethod);
        setHasPaymentMethod(true);
        setShowPaymentForm(false);
        handleConfirmPickup();
      } catch (error) {
        console.error('Error adding payment method', error);
      }
    }
  };

  const handleConfirmPickup = async () => {
    const orderDetails = {
      services: selectedServices,
      date: selectedDate,
    };

    try {
      await API.post('/confirm-pickup', orderDetails);
      alert('Pickup Confirmed');
    } catch (error) {
      console.error('Error confirming pickup', error);
    }
  };

=======
>>>>>>> 9924b045ac3cb7729dc4ef167cce99840456dcad
  return (
    <div className="main-content">
      <h1>Sign Up and Schedule a Pickup</h1>
      <div className="order-form">
        {step === 1 && (
          <div>
            <h2>Step 1/3: Personal Information</h2>
            <div className="form-group">
              <input type="text" name="firstName" placeholder="First name" value={formData.firstName} onChange={handleChange} required />
              <input type="text" name="lastName" placeholder="Last name" value={formData.lastName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <input type="tel" name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <input type="password" name="password" placeholder="Create password" value={formData.password} onChange={handleChange} required />
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2>Step 2/3: Address Information</h2>
            <div className="form-group">
              <input type="text" name="street" placeholder="Address" value={formData.street} onChange={handleChange} required />
              <input type="text" name="apt" placeholder="Apt # (Optional)" value={formData.apt} onChange={handleChange} />
              <input type="text" name="instructions" placeholder="Pickup and delivery instructions" value={formData.instructions} onChange={handleChange} />
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2>Step 3/3: Order Details</h2>
            <h3>Let us know which services you need:</h3>
            {services.map((service) => (
              <div
                key={service.value}
                className={`service-box ${formData.services.includes(service.value) ? 'selected' : ''}`}
                onClick={() => handleServiceClick(service.value)}
              >
                <div>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}

            <h3>Choose your pickup date:</h3>
            <div>
              {['Tonight', 'Tomorrow', 'Sat', 'Other'].map((label, index) => (
                <button
                  key={index}
                  className={`date-button ${formData.date === label ? 'selected' : ''}`}
                  onClick={() => {
                    if (label === 'Other') {
                      setShowCalendar(true);
                    } else {
                      handleDateClick(label);
                    }
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
            {showCalendar && (
              <Calendar
                onChange={(date) => handleDateClick(date.toDateString())}
                value={new Date()}
                minDate={new Date()}
              />
            )}
          </div>
        )}

        <div className="navigation-buttons">
          {step > 1 && <button onClick={handleBackClick}>Back</button>}
          <button onClick={handleContinueClick}>{step === 3 ? 'Place Order' : 'Continue'}</button>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
