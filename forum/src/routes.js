const Router = require('express');
const { createQuestionUseCase } = require('./use-case/createQuestion');

const router = Router();


router.post('/questions', async function (req, res) {
    const id = "c794d9e5-d988-40ed-90b2-c3b633c38c5b"
    const questions = req.body;
    const { hasErrors, errors, question } = await createQuestionUseCase(questions, id);

    if (hasErrors) {
        return res.status(400).json(errors);
    }

    return res.status(201).json(question);

});



module.exports = router