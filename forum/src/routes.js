const Router = require('express');
const { createQuestionUseCase } = require('./use-case/createQuestion');
const { listQuestions } = require('./use-case/listQuestions');
const { createAnswerUseCase } = require('./use-case/createAnswer');


const router = Router();

router.get('/questions', async (req, res) => {

    try {
        const questions = await listQuestions()
        res.status(200).json(questions);
    } catch (error) {
        res.json({ status: 'Error getting questions!', message: error.message });
    }

});


router.post('/questions', async function (req, res) {
    const id = "c794d9e5-d988-40ed-90b2-c3b633c38c5b"
    const user_name = "Teste teste"
    const questions = req.body;
    const { hasErrors, errors, question } = await createQuestionUseCase(questions, id, user_name);

    if (hasErrors) {
        return res.status(400).json(errors);
    }

    return res.status(201).json(question);

});

router.post('/answers', async function (req, res) {
    const id = "c794d9e5-d988-40ed-90b2-c3b633c38c5b"
    const answers = req.body;
    const { hasErrors, errors, answer } = await createAnswerUseCase(answers, id);

    if (hasErrors) {
        return res.status(400).json(errors);
    }

    return res.status(201).json(answer);

});



module.exports = router