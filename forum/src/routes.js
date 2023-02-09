const Router = require('express');
const { createQuestionUseCase } = require('./use-case/createQuestion');
const { listQuestions, listOneQuestions } = require('./use-case/listQuestions');
const { createAnswerUseCase } = require('./use-case/createAnswer');
const { decriptToken } = require('./helpers/decriptToken')


const router = Router();

router.get('/questions', async (req, res) => {

    try {
        const questions = await listQuestions();
        res.status(200).json(questions);
    } catch (error) {
        res.json({ status: 'Error getting questions!', message: error.message });
    }

});

router.get('/questions/:id', async (req, res) => {

    try {
        const { id } = req.params;
        const question = await listOneQuestions(id);
        res.status(200).json(question);
    } catch (error) {
        res.json({ status: 'Error getting question!', message: error.message });
    }

});


router.post('/questions', async function (req, res) {
    const authHeader = req.headers.authorization;
    if(!authHeader) {
        return res.status(401).json({message: 'Token authentication required'})
    }

    const token = authHeader.split(' ')[1]
    if(!token){
        return res.status(400).json({message: 'unexpected authorization header'})
    }

    const decriptedToken = decriptToken(token);
    const userId = decriptedToken.userId;
    if(!userId){
        return res.status(403).json({message: 'Forbidden'})
    }
    
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

    const authHeader = req.headers.authorization;
    if(!authHeader) {
        return res.status(401).json({message: 'Token authentication required'})
    }

    const token = authHeader.split(' ')[1]
    if(!token){
        return res.status(400).json({message: 'unexpected authorization header'})
    }

    const decriptedToken = decriptToken(token);
    const userId = decriptedToken.userId;
    if(!userId){
        return res.status(403).json({message: 'Forbidden'})
    }

    const id = "c794d9e5-d988-40ed-90b2-c3b633c38c5b"
    const answers = req.body;
    const { hasErrors, errors, answer } = await createAnswerUseCase(answers, id);

    if (hasErrors) {
        return res.status(400).json(errors);
    }

    return res.status(201).json(answer);

});



module.exports = router