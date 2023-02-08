const client = require("./clientDatabase")
const DataTypes = require("sequelize");
const Question = require("../../models/question")(client, DataTypes);

async function saveQuestion(question) {

    const createdQuestion = await Question.create(question);
    await createdQuestion.save();
    return createdQuestion;

}

async function findQuestion() {

    const allQuestions = await Question.findAll();
    return allQuestions

}

module.exports = { saveQuestion, findQuestion }