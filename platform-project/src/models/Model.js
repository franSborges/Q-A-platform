const Sequelize = require("sequelize");
const connection = require("../database/database");

const Question = connection.define('question', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

Question.sync({ force: false }).then(() => console.log('Table created'));

module.exports = Question;