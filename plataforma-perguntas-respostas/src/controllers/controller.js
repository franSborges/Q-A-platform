const Models = require("../models/Model");
const Answers = require("../models/Model-answers")

const renderHome = (req, res) => {
  Models.findAll({
    raw: true, order: [
    ['id', 'DESC']
  ]}).then(questions => {
    res.render('index', {
      questions: questions
    });
  });
}

const renderQuestions = (req, res) => {
  res.render("questions");
}

const saveQuestions = (req, res) => {
  const fieldTitle = req.body.title;
  const fieldDescription = req.body.description;

  Models.create({
    title: fieldTitle,
    description: fieldDescription

  }).then(() => res.redirect("/"));
}

const questionsPages = (req, res) => {
  const { id } = req.params;
  Models.findOne({

    where: { id: id }

  }).then(question => {
    if (question != undefined) {
      Answers.findAll({
        where: { questionId: question.id }
      }).then(answer => {
        res.render("questionPage", {
          question: question,
          answers: answer
        });
      }); 
    } else {
      res.redirect("/");
    }
  });
}

const answerQuestions = (req, res) => {
  const body = req.body.body;
  const questionId = req.body.question;

  Answers.create({
    body: body,
    questionId: questionId
  }).then(() => {
    res.redirect("/question/"+questionId);
  });
}

module.exports = {
  renderHome,
  renderQuestions,
  saveQuestions,
  questionsPages,
  answerQuestions
}
