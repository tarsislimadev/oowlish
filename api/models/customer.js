const { DataTypes } = require('sequelize');
const { sequelize } = require('../../database');

const Customer = sequelize.define('customer', {
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    allowNull: false,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  gender: {
    type: DataTypes.STRING
  },
  company: {
    type: DataTypes.STRING
  },
  city: {
    type: DataTypes.STRING
  },
  title: {
    type: DataTypes.STRING
  },
  latitude: {
    type: DataTypes.STRING
  },
  longitude: {
    type: DataTypes.STRING
  },
}, {
  createdAt: false,
  updatedAt: false,
});

module.exports = {
  Customer,
};
