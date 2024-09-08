const AdminService = require("../services/admin.service");

const getAllAdmins = async (req, res) => {
  try {
    const admins = await AdminService.getAllAdmins();
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ message: "Failed to get admins", error: error.message });
  }
};

// Get admin details by ID
const getAdminDetailsByID = async (req, res) => {
  const { adminId } = req.params;
  try {
    const admin = await AdminService.getAdminDetails(adminId);
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({
        message: `Failed to get admin with id ${adminId}`,
        error: error.message,
      });
  }
};

// Get admin details by EMAIL
const getAdminDetailsByEmail = async (req, res) => {
  const { adminEmail } = req.params;
  try {
    const admin = await AdminService.getAdminDetails(adminEmail);
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({
        message: `Failed to get admin with id ${adminEmail}`,
        error: error.message,
      });
  }
};

// Create a new admin
const createAdmin = async (req, res) => {
  const adminData = req.body;
  try {
    const newAdmin = await AdminService.createAdmin(adminData);
    res.status(201).json({ message: "Admin created successfully", data: newAdmin });
  } catch (error) {
    res.status(500).json({ message: "Failed to create admin", error: error.message });
  }
};

// Update an admin by ID
const updateAdmin = async (req, res) => {
  const { adminId } = req.params;
  const updatedData = req.body;
  try {
    const updatedAdmin = await AdminService.updateAdmin(adminId, updatedData);
    res.status(200).json({ message: "Admin updated successfully", data: updatedAdmin });
  } catch (error) {
    res.status(500).json({
        message: `Failed to update admin with id ${adminId}`,
        error: error.message,
      });
  }
};

// Delete an admin by ID
const deleteAdmin = async (req, res) => {
  const { adminId } = req.params;
  try {
    await AdminService.deleteAdmin(adminId);
    res.status(200).json({ message: "Admin deleted successfully" });
  } catch (error) {
    res.status(500).json({
        message: `Failed to delete admin with id ${adminId}`,
        error: error.message,
      });
  }
};

module.exports = {
  getAllAdmins,
  getAdminDetailsByID,
  getAdminDetailsByEmail,
  createAdmin,
  updateAdmin,
  deleteAdmin
}