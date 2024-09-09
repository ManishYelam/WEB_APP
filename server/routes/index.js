const express = require('express');
const router = express.Router();

const adminRoutes = require('./admin.routes');
const userRoutes = require('./user.routes');
const projectRoutes = require('./project.routes')

router.use('/admin', adminRoutes);
router.use('/user', userRoutes);
router.use('/project', projectRoutes)

module.exports = router;
