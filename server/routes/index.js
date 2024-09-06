const express = require('express');
const router = express.Router();

// Import route modules
const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const adminRoutes = require('./adminRoutes');
const projectRoutes = require('./projectRoutes');
const messageRoutes = require('./messageRoutes');

// Mount the route modules
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/admin', adminRoutes);
router.use('/messages', messageRoutes);

module.exports = router;
