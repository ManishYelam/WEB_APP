const axios = require('axios');
const BASE_URLS = require('../config/baseurls.config');

// Function to login
exports.login = async (email, password) => {
  const response = await axios.post(`${BASE_URLS.AUTH}/login`, { email, password });
  return response.data.token;
};

// Function to register
exports.register = async (userData) => {
  const response = await axios.post(`${BASE_URLS.AUTH}/register`, userData);
  return response.data;
};

// Function to reset password
exports.resetPassword = async (email) => {
  await axios.post(`${BASE_URLS.AUTH}/reset-password`, { email });
};
