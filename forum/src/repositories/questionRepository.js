const Question = require("../../models/question");
const Answer = require("../../models/answer");
const Keyword = require("../../models/keyword");

async function saveQuestion(question) {
  const createdQuestion = await Question.create(question, {
    include: [
      { association: Question.Answer, as: "answers" },
      { association: Question.Keyword, as: "keywords" },
    ],
  });
  await createdQuestion.save();
  return createdQuestion;
}

async function findQuestion() {
  const questions = await Question.findAll({
    include: [
      { association: Question.Answer, as: "answers" },
      { association: Question.Keyword, as: "keywords" },
    ],
  });
  return questions;
}
async function findOneQuestion(id) {
  const question = await Question.findOne({
    where: { id: id },
    include: [
      { association: Question.Answer, as: "answers" },
      { association: Question.Keyword, as: "keywords" },
    ],
  });
  return question;
}

// async function saveAnswer(body, id, user_name) {
//   const createdAnswer = await Answer.create({ question_id: id, bo, user_name });
//   createdAnswer.save();
//   return createdAnswer;
// }

module.exports = { saveQuestion, findQuestion, findOneQuestion };
