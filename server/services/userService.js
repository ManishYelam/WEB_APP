const axios = require('axios');
const BASE_URLS = require('../config/baseurls.config');

// Function to get user details
exports.getUserDetails = async (userId) => {
  const response = await axios.get(`${BASE_URLS.USERS}/${userId}`);
  return response.data;
};

// Function to create a new user
exports.createUser = async (userData) => {
  const response = await axios.post(BASE_URLS.USERS, userData);
  return response.data;
};

// Function to update a user
exports.updateUser = async (userId, updatedData) => {
  const response = await axios.put(`${BASE_URLS.USERS}/${userId}`, updatedData);
  return response.data;
};

// Function to delete a user
exports.deleteUser = async (userId) => {
  await axios.delete(`${BASE_URLS.USERS}/${userId}`);
};
