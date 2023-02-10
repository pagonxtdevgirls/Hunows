const Joi = require('joi');

const validator = (schema) => (payload) =>
    schema.validate(payload, {abortEarly: false})

const answerSchema = Joi.object({
    answer: Joi.array().required().min(1).items({
        user_name: Joi.string().required().trim().min(3),
        body: Joi.string().required().trim().min(15).max(3000)
    })
})

const answerValidate = validator(answerSchema)

module.exports = answerValidate