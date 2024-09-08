const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const Project = sequelize.define("Project", {
  project_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  project_title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  project_description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  project_status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  project_components: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Project;
