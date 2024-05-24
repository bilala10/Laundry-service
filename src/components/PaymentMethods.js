import React, { useState } from 'react';
import './PaymentMethods.css';

const PaymentMethods = () => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');

  const handleChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <div className="payment-methods">
      <h2>Select Payment Method</h2>
      <form>
        <label>
          <input type="radio" value="creditCard" checked={paymentMethod === 'creditCard'} onChange={handleChange} />
          Credit Card
        </label>
        <label>
          <input type="radio" value="paypal" checked={paymentMethod === 'paypal'} onChange={handleChange} />
          PayPal
        </label>
        <label>
          <input type="radio" value="cash" checked={paymentMethod === 'cash'} onChange={handleChange} />
          Cash
        </label>
      </form>
    </div>
  );
};

export default PaymentMethods;
