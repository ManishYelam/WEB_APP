const express = require('express');
const AdminController = require('../controllers/admin.controller');
const router = express.Router();

// Route to get all admins
router.get('/', AdminController.getAllAdmins);

// Route to get an admin by ID
router.get('/:adminId', AdminController.getAdminDetailsByID);

// Route to get an admin by Email
router.get('/:adminEmail', AdminController.getAdminDetailsByEmail);

// Route to create a new admin
router.post('/', AdminController.createAdmin);

// Route to update an admin by ID
router.put('/:adminId', AdminController.updateAdmin);

// Route to delete an admin by ID
router.delete('/:adminId', AdminController.deleteAdmin);

module.exports = router;
