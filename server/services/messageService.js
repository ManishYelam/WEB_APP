const axios = require('axios');
const BASE_URLS = require('../config/baseurls.config');

// Function to get all messages
exports.getAllMessages = async () => {
  const response = await axios.get(BASE_URLS.MESSAGES);
  return response.data;
};

// Function to create a new message
exports.createMessage = async (messageData) => {
  const response = await axios.post(BASE_URLS.MESSAGES, messageData);
  return response.data;
};
