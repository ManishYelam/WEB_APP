const pool = require('../config/db.config'); // Import MySQL connection

// Get all admins
exports.getAllAdmins = async (req, res) => {
  try {
    const [admins] = await pool.query('SELECT * FROM admins');
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get admin details by ID
exports.getAdminDetails = async (req, res) => {
  try {
    const adminId = req.params.id;
    const [admin] = await pool.query('SELECT * FROM admins WHERE id = ?', [adminId]);

    if (admin.length === 0) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    res.status(200).json(admin[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new admin
exports.createAdmin = async (req, res) => {
  try {
    const { name, email, password, contact_number } = req.body; // Assuming these fields exist
    const [result] = await pool.query(
      'INSERT INTO admins (name, email, password, contact_number) VALUES (?, ?, ?, ?)',
      [name, email, password, contact_number]
    );
    const newAdminId = result.insertId;

    const [newAdmin] = await pool.query('SELECT * FROM admins WHERE id = ?', [newAdminId]);
    res.status(201).json(newAdmin[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an admin
exports.updateAdmin = async (req, res) => {
  try {
    const adminId = req.params.id;
    const { name, email, contact_number } = req.body;

    await pool.query(
      'UPDATE admins SET name = ?, email = ?, contact_number = ? WHERE id = ?',
      [name, email, contact_number, adminId]
    );

    const [updatedAdmin] = await pool.query('SELECT * FROM admins WHERE id = ?', [adminId]);
    res.status(200).json(updatedAdmin[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an admin
exports.deleteAdmin = async (req, res) => {
  try {
    const adminId = req.params.id;

    const [result] = await pool.query('DELETE FROM admins WHERE id = ?', [adminId]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
