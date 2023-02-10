const Router = require('express');
const { createQuestionUseCase } = require('./use-case/createQuestion');
const { listQuestions, listOneQuestions } = require('./use-case/listQuestions');

const Answer = require('../models/answer')
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

    const {userId, nameUser} = decriptToken(token);
    if(!userId){
        return res.status(403).json({message: 'Forbidden'})
    }
    
    const id = userId.toString();
    const user_name = nameUser;
    const questions = req.body;
    const { hasErrors, errors, question } = await createQuestionUseCase(questions, id, user_name);

    if (hasErrors) {
        return res.status(400).json(errors);
    }

    return res.status(201).json(question); 
});



router.post('/question/:id/answers', async function (req, res) {
    const {id} = req.params;
    const question = await listOneQuestions(id);
    if (!question) {
        return res.status(404).json({message: 'question not found'})};

    const authHeader = req.headers.authorization;
    if(!authHeader) {
        return res.status(401).json({message: 'Token authentication required'})
    }

    const token = authHeader.split(' ')[1]
    if(!token){
        return res.status(400).json({message: 'unexpected authorization header'})
    }

    const {userId, nameUser} = decriptToken(token);
    if(!userId){
        return res.status(403).json({message: 'Forbidden'})
    }

    const {body} = req.body
    const user_name = nameUser;
    const create = await Answer.create({ question_id: id, body, user_name})
    create.save()

    return res.status(201).json(create);

});



module.exports = router