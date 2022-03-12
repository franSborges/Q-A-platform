const Sequelize = require("sequelize");

                              //  Database name     user           Password
const connection = new Sequelize('confidential', 'confidential', 'confidential', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = connection;
  

