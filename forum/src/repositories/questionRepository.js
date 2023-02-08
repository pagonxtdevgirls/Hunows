const Question = require("../../models/question")
const DataTypes = require("sequelize");
const client = require("./clientDatabase")
async function saveQuestion(question) {

    const createdQuestion = await Question(client, DataTypes).create(question);
    await createdQuestion.save();
    return createdQuestion;

}

module.exports = { saveQuestion }