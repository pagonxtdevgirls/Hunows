const Questions = require("../../models/questions")
const DataTypes = require("sequelize");
const client = require("./clientDatabase")
const Response = require("../../models/response")



async function saveQuestion(question) {

    const createdQuestion = await Questions(client, DataTypes).create(question);
    await createdQuestion.save();
    return createdQuestion;

}

async function saveAnswer(answer) {

    const createdAnswer = await Response(client, DataTypes).create(answer);
    await createdAnswer.save();
    return createdAnswer;

}

module.exports = { saveQuestion, saveAnswer }