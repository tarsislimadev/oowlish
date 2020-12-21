const { database } = require("./config");
const { Sequelize } = require('sequelize');

module.exports.sequelize = new Sequelize(
  database.database, 
  database.user, 
  database.password, {
  host: database.host,
  dialect: 'mariadb',
});
