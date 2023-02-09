const { findQuestion, findOneQuestion } = require("../repositories/questionRepository");

async function listQuestions() {

    const questions = await findQuestion();
    return questions;
}

async function listOneQuestions(id) {

    const question = await findOneQuestion(id);
    return question;
}
module.exports = { listQuestions, listOneQuestions }