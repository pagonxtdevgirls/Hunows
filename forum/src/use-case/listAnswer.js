const { findAnswer } = require("../repositories/questionRepository");

async function listAnswer() {

    const answers = findAnswer();
    return answers;
}
module.exports = { listAnswer}