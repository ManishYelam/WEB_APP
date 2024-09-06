const axios = require('axios');
const BASE_URLS = require('../config/baseurls.config');

// Function to get all admins
exports.getAllAdmins = async () => {
  const response = await axios.get(BASE_URLS.ADMIN);
  return response.data;
};

// Function to get admin details
exports.getAdminDetails = async (adminId) => {
  const response = await axios.get(`${BASE_URLS.ADMIN}/${adminId}`);
  return response.data;
};

// Function to create a new admin
exports.createAdmin = async (adminData) => {
  const response = await axios.post(BASE_URLS.ADMIN, adminData);
  return response.data;
};

// Function to update an admin
exports.updateAdmin = async (adminId, updatedData) => {
  const response = await axios.put(`${BASE_URLS.ADMIN}/${adminId}`, updatedData);
  return response.data;
};

// Function to delete an admin
exports.deleteAdmin = async (adminId) => {
  await axios.delete(`${BASE_URLS.ADMIN}/${adminId}`);
};
