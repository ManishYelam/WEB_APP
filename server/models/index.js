
const sequelize = require('../config/db.config');

const User = require('./user.model');
const Project = require('./project.model');
const Admin = require('./admin.model');

User.hasMany(Project);
Project.belongsTo(User);

User.hasOne(Project); 
Project.belongsTo(User);

Admin.hasMany(Project); 
Project.belongsTo(Admin);

sequelize.sync();
// sequelize.drop();

module.exports = {
    sequelize,
    User,
    Project,
    Admin,
};
