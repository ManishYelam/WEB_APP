const axios = require('axios');
const BASE_URLS = require('../config/baseurls.config');

// Function to get all projects
exports.getAllProjects = async () => {
  const response = await axios.get(BASE_URLS.PROJECTS);
  return response.data;
};

// Function to get project details
exports.getProjectDetails = async (projectId) => {
  const response = await axios.get(`${BASE_URLS.PROJECTS}/${projectId}`);
  return response.data;
};

// Function to create a new project
exports.createProject = async (projectData) => {
  const response = await axios.post(BASE_URLS.PROJECTS, projectData);
  return response.data;
};

// Function to update a project
exports.updateProject = async (projectId, updatedData) => {
  const response = await axios.put(`${BASE_URLS.PROJECTS}/${projectId}`, updatedData);
  return response.data;
};

// Function to delete a project
exports.deleteProject = async (projectId) => {
  await axios.delete(`${BASE_URLS.PROJECTS}/${projectId}`);
};
