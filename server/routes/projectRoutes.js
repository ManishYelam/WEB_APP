const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project.controller');

// Project routes
router.get('/', projectController.getAllProjects);
router.get('/:id', projectController.getProjectDetails);
router.post('/', projectController.createProject);
router.put('/:id', projectController.updateProject);
router.delete('/:id', projectController.deleteProject);

module.exports = router;
