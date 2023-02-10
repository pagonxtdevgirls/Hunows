const Question = require("../../models/question");
const Answer = require("../../models/answer");


async function saveQuestion(question) {
  const createdQuestion = await Question.create(question, {
    include: [
      { association: Question.Answer, as: "answers" },

    ],
  });
  await createdQuestion.save();
  return createdQuestion;
}

async function findQuestion() {
  const questions = await Question.findAll({
    include: [
      { association: Question.Answer, as: "answers" },

    ],
  });
  return questions;
}
async function findOneQuestion(id) {
  const question = await Question.findOne({
    where: { id: id },
    include: [
      { association: Question.Answer, as: "answers" },

    ],
  });
  return question;
}

async function updateStatus(body, id, id_answer) {
  const question = await findOneQuestion(id);
  await question.update({
    status: body, where: {
      id_answer: id_answer
    }
  });
  return question;
}

module.exports = { saveQuestion, findQuestion, findOneQuestion, updateStatus };
