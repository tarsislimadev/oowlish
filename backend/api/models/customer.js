const { DataTypes } = require('sequelize');
const { sequelize } = require('../../database');

const Customer = sequelize.define('customer', {
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true,
  },
  first_name: {
    type: DataTypes.STRING,
  },
  last_name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
  },
  gender: {
    type: DataTypes.STRING,
  },
  company: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
  },
  title: {
    type: DataTypes.STRING,
  },
  latitude: {
    type: DataTypes.STRING,
  },
  longitude: {
    type: DataTypes.STRING,
  },
}, {
  createdAt: false,
  updatedAt: false,
});

module.exports = {
  Customer,
};
