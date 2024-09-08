const axios = require('axios');
const BASE_URLS = require('../config/baseurls.config');

// Function to get all admins
const getAllAdmins = async () => {
  try {
    const response = await axios.get(BASE_URLS.ADMIN);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching admins: ${error.message}`);
  }
};

// Function to get admin details
const getAdminDetailsByID = async (adminId) => {
  try {
    const response = await axios.get(`${BASE_URLS.ADMIN}/${adminId}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching admin details: ${error.message}`);
  }
};

const getAdminDetailsByEmail = async (adminEmail) => {
  try {
    const response = await axios.get(`${BASE_URLS.ADMIN}/${adminEmail}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching admin details: ${error.message}`);
  }
};

// Function to create a new admin
const createAdmin = async (adminData) => {
  try {
    const response = await axios.post(BASE_URLS.ADMIN, adminData);
    return response.data;
  } catch (error) {
    throw new Error(`Error creating admin: ${error.message}`);
  }
};

// Function to update an admin
const updateAdmin = async (adminId, updatedData) => {
  try {
    const response = await axios.put(`${BASE_URLS.ADMIN}/${adminId}`, updatedData);
    return response.data;
  } catch (error) {
    throw new Error(`Error updating admin: ${error.message}`);
  }
};

// Function to delete an admin
const deleteAdmin = async (adminId) => {
  try {
    await axios.delete(`${BASE_URLS.ADMIN}/${adminId}`);
  } catch (error) {
    throw new Error(`Error deleting admin: ${error.message}`);
  }
};

module.exports = {
  getAllAdmins,
  getAdminDetailsByID,
  getAdminDetailsByEmail,
  createAdmin,
  updateAdmin,
  deleteAdmin
}