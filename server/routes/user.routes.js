const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/', userController.createUser);
router.post('/', userController.loginUser);
router.put('/:user_id', userController.updateUser);
router.get('/:user_id', userController.getUserById);
router.delete('/:user_id', userController.deleteUser);

module.exports = router;
