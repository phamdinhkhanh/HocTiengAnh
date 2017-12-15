const questionController = require('../controllers/questionController');
const userController = require('../controllers/userController');
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
});

// router.post('/', (req, res) => {
//   let userid = req.body.userid;
//   let questionid = req.body.questionid;
//   console.log("questionid:",questionid);
//   userController.updatePoint(userid,questionid,(err,data) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).send(data);
//     }
//   });
// });

module.exports = router;
