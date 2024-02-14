

const { DataTypes } = require('sequelize');
const db = require('../utils/db');

const User = db.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  
});

module.exports = User;
