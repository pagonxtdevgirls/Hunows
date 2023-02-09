const joi = require('joi');
const { saveQuestion } = require('../repositories/questionRepository');

const questionValidator = joi.object({
    title: joi.string().trim().min(2).max(250).required(),
    body: joi.string().trim().min(10).max(5000).required(),
    user_name: joi.string().trim(),
    user_id: joi.string().trim(),
    keywords: joi.array().items(
        joi.object({
            name: joi.string().trim(),
        })
    ),
    answers: joi.array().items(
        joi.object({
            body: joi.string().trim().min(10).max(5000),
            soved: joi.string().trim(),
        })
    ),
})

async function createQuestionUseCase(question, id, name_user) {
    const user_id = id;
    const user_name = name_user;
    const createQuestion = { user_id, user_name, ...question }
    const { error } = questionValidator.validate(createQuestion, { abortEarly: false });

    if (error) {
        return {
            hasErrors: true,
            errors: error.details.map(error => ({
                message: error.message,
                property: error.path.at(0),
            })),
            question: createQuestion,
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