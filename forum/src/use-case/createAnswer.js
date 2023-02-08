const joi = require('joi');
const { saveAnswer } = require('../repositories/questionRepository');

const answerValidator = joi.object({
    name: joi.string().trim().required(),
    body: joi.string().trim().min(10).max(5000).required(),
    //keywords: joi.string().trim().required(),
    id_answer: joi.string().trim().required().guid({ version: ['uuidv4'] })
})

async function createAnswerUseCase(answer, id) {
    const id_answer = id;
    const createAnswer = { id_answer, ...answer }
    const { error } = answerValidator.validate(createAnswer, { abortEarly: false });

    if (error) {
        return {
            hasErrors: true,
            errors: error.details.map(error => ({
                message: error.message,
                property: error.path.at(0),
            })),
            answer: createAnswer,
        }
    }

    const savedAnswer = await saveAnswer(createAnswer)

    return {
        hasErrors: false,
        errors: undefined,
        answer: savedAnswer
    };
}

module.exports = { createAnswerUseCase }