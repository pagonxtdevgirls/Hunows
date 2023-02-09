
const Question = require("../../models/question");
const Answer = require("../../models/answer")
const Keyword = require("../../models/keyword")

async function saveQuestion(question) {

    const createdQuestion = await Question.create(question, {
        include: [
            { association: Question.Answer, as: 'answers' },
            { association: Question.Keyword, as: 'keywords' }
        ]
    });
    await createdQuestion.save();
    return createdQuestion;

}

async function findQuestion() {

    const allQuestions = await Question.findAll();
    return allQuestions

}

async function findAnswer() {

    const allAnswers = await Answer.findAll();
    return allAnswers

}

async function saveAnswer(answer) {

    const createdAnswer = await Answer.create(answer, {
        include: { association: Answer }
    });
    await createdAnswer.save();
    return createdAnswer;

}

module.exports = { saveQuestion, saveAnswer, findQuestion, findAnswer }
