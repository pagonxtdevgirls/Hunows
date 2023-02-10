import { Router } from 'express';
import { findOneUser } from './repositories/accountRepository.js';

import { createUser } from './use-case/createUser.js';
import { createUserTokenUseCase } from './use-case/createUserToken.js';


const router = Router();

router.post('/users', async (request, response) => {
    const { name, email, password } = request.body;
    const { hasError, errors, user } = await createUser(name, email, password);

    if (hasError) {
        return response.status(400).json(errors);
    }
    return response.status(201).json(user);
});

router.post('/tokens', async (request, response) => {
    const { email, password } = request.body
    const authToken = await createUserTokenUseCase(email, password);

    if (authToken) {
        return response.status(201).json({
            token: authToken
        });
    }

    return response.status(401).json({
        message: 'user e-mail or password incorrect',
    });
});

router.get('/users/:id', async (req, res) => {

    try {
        const { id } = req.params;
        const user = await findOneUser(id);
        res.status(200).json(user);
    } catch (error) {
        res.json({ status: 'User not found', message: error.message });
    }

});



export { router };




