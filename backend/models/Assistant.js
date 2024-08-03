const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Assistant = sequelize.define('Assistant', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  instructions: {
    type: DataTypes.STRING,
    allowNull: false
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fileUrl: {
    type: DataTypes.STRING,
    allowNull: true
  },
  temperature: {
    type: DataTypes.FLOAT,
    defaultValue: 1
  },
  topP: {
    type: DataTypes.FLOAT,
    defaultValue: 1
  },
  maxLength: {
    type: DataTypes.INTEGER,
    defaultValue: 256
  }
}, {
  timestamps: true
});

module.exports = Assistant;
