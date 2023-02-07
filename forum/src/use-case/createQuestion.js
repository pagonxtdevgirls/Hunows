const joi = require('joi');
const { saveQuestion } = require('../repositories/questionRepository');

const questionValidator = joi.object({
    title: joi.string().trim().min(2).max(250).required(),
    body: joi.string().trim().min(10).max(5000).required(),
    keywords: joi.string().trim().required(),
    id_question: joi.string().trim().required().guid({ version: ['uuidv4'] })
})

async function createQuestionUseCase(question, id) {
    const id_question = id;
    const createQuestion = { id_question, ...question }
    const { error } = questionValidator.validate(createQuestion, { abortEarly: false });

    if (error) {
        return {
            hasErrors: true,
            errors: error.details.map(error => ({
                message: error.message,
                property: error.path.at(0),
            })),
            product: createQuestion,
        }
    }

    const savedQuestion = await saveQuestion(createQuestion)

    return {
        hasErrors: false,
        errors: undefined,
        question: savedQuestion
    };
}

module.exports = { createQuestionUseCase }