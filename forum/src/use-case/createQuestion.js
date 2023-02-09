const joi = require('joi');
const { saveQuestion } = require('../repositories/questionRepository');

const questionValidator = joi.object({
    title: joi.string().trim().min(2).max(250).required(),
    question: joi.string().trim().min(10).max(5000).required(),
    user_name: joi.string().trim().required(),
    user_id: joi.string().trim().required()
})

async function createQuestionUseCase(question) {
   // const user_id = id;
   
   // const { error } = questionValidator.validate(createQuestion, { abortEarly: false });

    // if (error) {
    //     return {
    //         hasErrors: true,
    //         errors: error.details.map(error => ({
    //             message: error.message,
    //             property: error.path.at(0),
    //         })),
    //         question: createQuestion,
    //     }
    // }

   return await saveQuestion(question)

    // return {
    //     hasErrors: false,
    //     errors: undefined,
    //     question: savedQuestion
    // };
}

module.exports = { createQuestionUseCase }