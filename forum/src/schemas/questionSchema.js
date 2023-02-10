const Joi = require('joi');

const validator = (schema) => (payload) =>
    schema.validate(payload, {abortEarly: false})

const questionSchema = Joi.object({
    title: Joi.string().trim().required().max(250),
    body: Joi.string().trim().required().min(30).max(5000),
    user_name: Joi.string().trim().required().min(3),
    keywords: Joi.array().required().min(1).items({
        name: Joi.string().required().min(3)
    })
})


const questionValidate = validator(questionSchema)

module.exports = questionValidate