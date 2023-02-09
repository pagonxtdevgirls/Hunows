import { hashPassword } from '../helpers/password.js';
import { saveAccount } from '../repositories/accountRepository.js';
import joi from 'joi';

    const accountValidator = joi.object({
        name: joi.string().trim().required(),
        email: joi.string().trim().required().email(),
        password: joi.string().trim().min(6),
})

export async function createUser(name, email, password) {
   
    const { error } = accountValidator.validate({name, email, password}, { abortEarly: false });

    if (error) {
        return {
            hasError: true,
            errors: error.details.map(error => ({
                message: error.message,
                property: error.path.at(0),
            })),
            account: {}
        }
    }

    const hashedPassword = await hashPassword(password);
    const user = {
        name, 
        email,
        password: hashedPassword,
    };

    await saveAccount(user);
    return {
        hasError: false,
        errors: undefined,
        user: {
            name,
            email
        }

    };
}
