const adminService = require('../services/adminService');

exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await adminService.getAllAdmins();
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAdminDetails = async (req, res) => {
  try {
    const adminId = req.params.id;
    const admin = await adminService.getAdminDetails(adminId);
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createAdmin = async (req, res) => {
  try {
    const adminData = req.body;
    const newAdmin = await adminService.createAdmin(adminData);
    res.status(201).json(newAdmin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateAdmin = async (req, res) => {
  try {
    const adminId = req.params.id;
    const updatedData = req.body;
    const updatedAdmin = await adminService.updateAdmin(adminId, updatedData);
    res.status(200).json(updatedAdmin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteAdmin = async (req, res) => {
  try {
    const adminId = req.params.id;
    await adminService.deleteAdmin(adminId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
