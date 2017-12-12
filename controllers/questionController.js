const questionModel = require('../models/questionModel') ;

getAllQuestions = (callback) => {
  questionModel.find({},(err,data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
}

getQuestionById = (id, callback) => {
  questionModel.findOne({_id:id},(err,data) => {
    if(err) {
      callback(err);
    } else {
      callback(null,data);
    }
  });
}

getRandomQuestion = (callback) => {
  questionModel.aggregate({ $sample: { size: 1 } },(err,data) => {
    if(err) {
      callback(err);
    } else {
      callback(null,data);
    }
  })
}


createNewQuestion = (question, callback) => {
  let newQuestion = {
    title:question.title,
    answers:question.answers,
    result:question.result,
    points:question.points
  }
  questionModel.create(newQuestion,(err,data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  })
}

deleteAnQuestion = (id, callback) => {
  questionModel.remove({_id:id}, (err,data) => {
    if(err) callback(err);
    else callback(null,data);
  })
}

module.exports = {
  getAllQuestions,
  getQuestionById,
  getRandomQuestion,
  createNewQuestion,
  deleteAnQuestion
}
