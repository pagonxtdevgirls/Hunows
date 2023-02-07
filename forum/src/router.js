const Router = require('express');

const router = Router();


router.post('/questions', async function (req, res) {

    const questions = req.body;

    return res.status(201).json(questions);

});



module.exports = router