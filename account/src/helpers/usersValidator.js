// import joi from 'joi';
// import { saveAccount } from '../repositories/accountRepository';

// const accountValidator = joi.object({
//     name: joi.string().trim().required(),
//     email: joi.string().email().required(),
//     password: joi.string().trim().min(6),
// })

// export async function createUser(user) {
//     const accountSaveUser = { ...user, id: id };

//     const { error } = accountValidator.validate(accountSaveUser, { abortEarly: false });

//     if(error) {
//        return { 
//             hasErrors: true, 
//             errors: error.details.map(error => ({
//                 message: error.message,
//                 property: error.path.at(0),
//             })), 
//             user: {},
//         }
//     }

//     const accountSave = await saveAccount(accountSaveUser);
    
//     return{
//         hasErrors: false,
//         errors: undefined,
//         user:accountSave
//     };
// }


