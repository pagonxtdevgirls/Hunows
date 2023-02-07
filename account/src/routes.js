import { Router } from 'express';
import { createUserUseCase } from "../src/use-case/createUser.js";


const router = Router();

router.post('/accounts/register', async function (req, res, next) {

    const { name, email, password } = req.body

    try {
        const user = await createUserUser(name, email, password);
        if (user === undefined) {
            res.status(400).json({ message: 'Account already exists' })
            return next();
        }

        res.status(201).json({
            id: user.id,
            name: user.name,
            email: user.email,
            createdDate: user.createdDate
        });
    } catch (e) {
        res.status(400).json({ message: 'Account already exists', e })
    }


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
