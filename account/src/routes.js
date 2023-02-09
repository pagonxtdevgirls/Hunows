import { Router } from 'express';
import { createUser } from './use-case/createUser.js';
import { createUserTokenUseCase } from './use-case/createUserToken.js';

const router = Router();

router.post('/users', async (request, response) => {
    const { name, email, password } = request.body;
    const { hasError, errors, user } = await createUser(name, email, password);

    if(hasError) {
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
        message:'user e-mail or password incorrect',
    });
});

router.get('/users/:id', function(request, response) {
    const accountId = request.params.id;
    viewAccountUseCase(accountId).then(account => {
        response.json(account);
    });
});

export { router };




