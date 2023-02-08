import { Router } from 'express';
import { createUser } from './use-case/createUser.js';


const router = Router();

router.post('/users', async (request, response) => {
    const { name, email, password } = request.body;
    const { hasError, errors, user } = await createUser(name, email, password);

    if(hasError) {
        return response.status(400).json(errors);
    }
    return response.status(201).json(user);
});

router.post('/accounts/login', async (req, res) => {

    const { email, password } = req.body

    try {
        const token = await createToken(email, password)
        if (token === null) {

            res.status(400).json({ auth: false, message: "email ou senha incorretos!" });
        } else {
            res.status(201).json({ auth: true, token: token });
        }
    } catch (error) {
        res.status(400).json({ auth: false, message: "email ou senha incorretos!" });
    }
})

export { router };
