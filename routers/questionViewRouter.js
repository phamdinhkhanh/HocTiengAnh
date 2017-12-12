const questionController = require('../controllers/questionController');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  questionController.getRandomQuestion((err,data) => {
    if(err){
      res.status(500).send(err);
    } else {
      res.render("question");
    }
  });
})

router.post('/api/answer', (req, res) => {
  res.send({
    score : checkAnswer(req.body),
    correctAnswer : getCorrectAnswer()
  });
});

module.exports = router;
