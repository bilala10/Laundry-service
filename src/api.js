// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5002'; // Ensure this is the correct URL for your backend

export const checkPaymentMethod = async () => {
  try {
    const response = await axios.get(`${API_URL}/check-payment-method`);
    return response.data;
  } catch (error) {
    console.error('Error checking payment method', error);
    throw error;
  }
};

export const addPaymentMethod = async (paymentMethod) => {
  try {
    const response = await axios.post(`${API_URL}/add-payment-method`, paymentMethod);
    return response.data;
  } catch (error) {
    console.error('Error adding payment method', error);
    throw error;
  }
};

export const confirmPickup = async (orderDetails) => {
  try {
    const response = await axios.post(`${API_URL}/confirm-pickup`, orderDetails);
    return response.data;
  } catch (error) {
    console.error('Error confirming pickup', error);
    throw error;
  }
};
