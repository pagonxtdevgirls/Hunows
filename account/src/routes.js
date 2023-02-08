import { Router } from 'express';
import { createUser } from './use-case/createUser.js';
import { createUserTokenUseCase } from './use-case/createUserToken.js';

const router = Router();

router.post('/accounts/register', async function (req, res) {

    const { name, email, password } = req.body

        const user = await createUser(name, email, password);
        if (user === undefined) {
            res.status(400).json({ message: 'Account already exists' })
        }

        res.status(201).json({
            id: user.id,
            name: user.name,
            email: user.email,
            createdDate: user.createdDate
        });


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
export { router };