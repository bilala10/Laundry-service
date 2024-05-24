// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5002/api', // Ensure this is the correct URL for your backend
});

// Add a request interceptor to include the token in headers
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export const checkPaymentMethod = async () => {
  try {
    const response = await API.get('/check-payment-method');
    return response.data;
  } catch (error) {
    console.error('Error checking payment method', error);
    throw error;
  }
};

export const addPaymentMethod = async (paymentMethod) => {
  try {
    const response = await API.post('/add-payment-method', paymentMethod);
    return response.data;
  } catch (error) {
    console.error('Error adding payment method', error);
    throw error;
  }
};

export const confirmPickup = async (orderDetails) => {
  try {
    const response = await API.post('/confirm-pickup', orderDetails);
    return response.data;
  } catch (error) {
    console.error('Error confirming pickup', error);
    throw error;
  }
};

export default API;
