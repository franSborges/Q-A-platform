const Sequelize = require("sequelize");

const connection = new Sequelize('questionsAndanswers', 'root', '306433', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = connection;