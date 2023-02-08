const client = require("./clientDatabase")
const DataTypes = require("sequelize");
const Question = require("../../models/question")(client, DataTypes);
const Response = require("../../models/response")

async function saveQuestion(question) {

    const createdQuestion = await Question.create(question);
    await createdQuestion.save();
    return createdQuestion;

}

async function findQuestion() {

    const allQuestions = await Question.findAll();
    return allQuestions

}

async function saveAnswer(answer) {

    const createdAnswer = await Response(client, DataTypes).create(answer);
    await createdAnswer.save();
    return createdAnswer;

}

module.exports = { saveQuestion, saveAnswer }
