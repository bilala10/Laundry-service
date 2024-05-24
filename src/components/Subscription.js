import React, { useState } from 'react';
import './Subscription.css';

const Subscription = () => {
  const [selectedSubscription, setSelectedSubscription] = useState('Sunday Repeat');
  const [selectedPlan, setSelectedPlan] = useState('1 bag/month');
  const [billingCycle, setBillingCycle] = useState('Monthly');

  const handleSubscriptionChange = (subscription) => {
    setSelectedSubscription(subscription);
    setSelectedPlan('1 bag/month');
    setBillingCycle('Monthly');
  };

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };

  const handleBillingCycleChange = (cycle) => {
    setBillingCycle(cycle);
  };

  const handleSaveSubscription = () => {
    // Logic to save the subscription details
    alert(`Saved: ${selectedSubscription}, ${selectedPlan}, ${billingCycle}`);
  };

  return (
    <div className="subscription">
      <h2>{selectedSubscription}</h2>
      <p>Our all-inclusive Wash & Fold subscription. Priced by the bag, not by the pound. If it fits in the bag, we‘ll clean it.</p>
      <h3>Choose your perfect plan.</h3>
      <div className="subscription-toggle">
        <button 
          className={`subscription-type ${selectedSubscription === 'Sunday Repeat' ? 'selected' : ''}`}
          onClick={() => handleSubscriptionChange('Sunday Repeat')}
        >
          Sunday Repeat
        </button>
        <button 
          className={`subscription-type ${selectedSubscription === 'Sunday Repeat Plus' ? 'selected' : ''}`}
          onClick={() => handleSubscriptionChange('Sunday Repeat Plus')}
        >
          Sunday Repeat Plus
        </button>
      </div>
      <div className="plans">
        <div className={`plan ${selectedPlan === '1 bag/month' ? 'selected' : ''}`} onClick={() => handlePlanChange('1 bag/month')}>
          <p>1 bag/month</p>
          <p>{selectedSubscription === 'Sunday Repeat' ? '$72 / bag' : '$72 / bag'}</p>
        </div>
        <div className={`plan ${selectedPlan === '2 bags/month' ? 'selected' : ''}`} onClick={() => handlePlanChange('2 bags/month')}>
          <p>2 bags/month</p>
          <p>{selectedSubscription === 'Sunday Repeat' ? '$62 / bag' : '$61 / bag'}</p>
        </div>
        <div className={`plan ${selectedPlan === '4 bags/month' ? 'selected' : ''}`} onClick={() => handlePlanChange('4 bags/month')}>
          <p>4 bags/month</p>
          <p>{selectedSubscription === 'Sunday Repeat' ? '$53 / bag' : '$53 / bag'}</p>
          <p>{selectedSubscription === 'Sunday Repeat' ? '$124 / month' : '$144 / month'}</p>
        </div>
      </div>
      <div className="billing-cycle">
        <button className={`cycle ${billingCycle === 'Monthly' ? 'selected' : ''}`} onClick={() => handleBillingCycleChange('Monthly')}>Monthly</button>
        <button className={`cycle ${billingCycle === 'Annual' ? 'selected' : ''}`} onClick={() => handleBillingCycleChange('Annual')}>Annual</button>
      </div>
      <ul className="features">
        <li>Priced by the bag, not the pound</li>
        <li>Always free pickup & delivery</li>
        <li>Waived Service Fee on all orders</li>
        <li>Standard turnaround</li>
        {selectedSubscription === 'Sunday Repeat Plus' && (
          <>
            <li>Free Next-Day Rush Service</li>
            <li>Unlimited rollover of bags and pounds</li>
            <li>$10 in monthly credit for other services</li>
          </>
        )}
      </ul>
      <p>You can change, pause, or cancel your Sunday Repeat plan anytime.</p>
      <button className="save-button" onClick={handleSaveSubscription}>Save Subscription</button>
    </div>
  );
};

export default Subscription;
