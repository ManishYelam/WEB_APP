const express = require('express');
const AdminController = require('../controllers/admin.controller');
const router = express.Router();

router.post('/', AdminController.createAdmin);
router.post('/login', AdminController.loginAdmin);
router.put('/:admin_id', AdminController.updateAdmin);
router.get('/:input_admin_id', AdminController.getAdminById);
router.delete('/:input_admin_id', AdminController.deleteAdmin);

module.exports = router;
