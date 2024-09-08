const projectService = require('../services/projectService');

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await projectService.getAllProjects();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProjectDetails = async (req, res) => {
  try {
    const projectId = req.params.id;
    const project = await projectService.getProjectDetails(projectId);
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createProject = async (req, res) => {
  try {
    const projectData = req.body;
    const newProject = await projectService.createProject(projectData);
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const projectId = req.params.id;
    const updatedData = req.body;
    const updatedProject = await projectService.updateProject(projectId, updatedData);
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const projectId = req.params.id;
    await projectService.deleteProject(projectId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
