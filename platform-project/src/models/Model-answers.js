const Sequelize = require("sequelize");
const connection  = require("../database/database");

const Answers = connection.define('answers', {
  body: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  questionId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

Answers.sync({ force: false });
module.exports = Answers;
