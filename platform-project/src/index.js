const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

const Main_model = require("./models/Model");
const Model_answers = require("./models/Model-answers");


connection.authenticate().then(() => {
  console.log('conected');
}).catch((err) => {
  console.log(err);
});

const {
  renderHome,
  renderQuestions,
  saveQuestions,
  questionsPages,
  answerQuestions
} = require('./controllers/controller');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//routes
app.get('/', renderHome);

app.get('/question', renderQuestions);

app.post('/save-question', saveQuestions);

app.get('/question/:id', questionsPages);

app.post('/answer', answerQuestions);

app.listen(8000);
