const { findQuestion } = require("../repositories/questionRepository");

async function listQuestions() {

    const questions = findQuestion();
    return questions;
}
module.exports = { listQuestions }