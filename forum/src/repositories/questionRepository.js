const Questions = require("../../models/questions")
const DataTypes = require("sequelize");
const client = require("./clientDatabase")
async function saveQuestion(question) {

    const createdQuestion = await Questions(client, DataTypes).create(question);
    await createdQuestion.save();
    return createdQuestion;

}

module.exports = { saveQuestion }