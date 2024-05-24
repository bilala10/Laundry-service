// src/components/OrderForm.js
import React, { useState, useEffect } from 'react';
import './OrderForm.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { checkPaymentMethod, addPaymentMethod, confirmPickup } from '../api';

const OrderForm = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [hasPaymentMethod, setHasPaymentMethod] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const fetchPaymentMethod = async () => {
      try {
        const paymentMethodExists = await checkPaymentMethod();
        setHasPaymentMethod(paymentMethodExists);
      } catch (error) {
        console.error('Error fetching payment method', error);
      }
    };
    fetchPaymentMethod();
  }, []);

  const services = [
    { name: 'Wash & Fold', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', value: 'washFold' },
    { name: 'Dry Cleaning', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', value: 'dryCleaning' },
    { name: 'Hang Dry', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', value: 'hangDry' }
  ];

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
        await addPaymentMethod(paymentMethod);
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
      await confirmPickup(orderDetails);
      alert('Pickup Confirmed');
    } catch (error) {
      console.error('Error confirming pickup', error);
    }
  };

  return (
    <div className="main-content">
      <h1>Schedule a Pickup</h1>
      <div className="order-form">
        <h2>Let us know which services you need:</h2>
        {services.map((service) => (
          <div
            key={service.value}
            className={`service-box ${selectedServices.includes(service.value) ? 'selected' : ''}`}
            onClick={() => handleServiceClick(service)}
          >
            <div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}

        <h2>Choose your pickup date:</h2>
        <div className="pickup-dates">
          {['Tonight', 'Tomorrow', 'Sat', 'Other'].map((label, index) => (
            <button
              key={index}
              className={`date-button ${selectedDate === label ? 'selected' : ''}`}
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

        <div className="order-summary">
          <h3>Order Summary</h3>
          <p><strong>Selected Services:</strong></p>
          <ul>
            {selectedServices.map((service) => (
              <li key={service}>{services.find((s) => s.value === service)?.name}</li>
            ))}
          </ul>
          <p><strong>Pickup Date:</strong> {selectedDate}</p>
          <p><strong>Turnaround Time:</strong> Standard</p>
        </div>

        {!showPaymentForm ? (
          <button className="continue-btn" onClick={handleContinueClick}>Continue</button>
        ) : (
          <form onSubmit={handlePaymentSubmit}>
            <h2>Add Payment Method</h2>
            <CardElement />
            <button className="continue-btn" type="submit">Confirm Pickup</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default OrderForm;
