const Sequelize = require('sequelize');
const sequelize = require('../config/db.config');

// Import models
const User = require('./userModel')(sequelize, Sequelize.DataTypes);
const Project = require('./projectModel')(sequelize, Sequelize.DataTypes);
const Admin = require('./adminModel')(sequelize, Sequelize.DataTypes);
const Message = require('./messageModel')(sequelize, Sequelize.DataTypes);

// Define associations
User.hasMany(Project);
Project.belongsTo(User);

User.hasOne(Profile); // Example association
Profile.belongsTo(User);

Admin.hasMany(Project); // Example association
Project.belongsTo(Admin);

module.exports = {
    sequelize,
    User,
    Project,
    Admin,
    Message,
};
