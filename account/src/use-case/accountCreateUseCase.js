import {saveAccount} from "../repositories/accountRepository.js"

const error = new Error()

export async function createUser(name, email, password) {
    if (typeof name !== 'string' || (typeof name==='string' && name.length <1)) {
        error.message = "O nome tem que ser uma string e não pode estar vazio"
        error.statusCode = 400
        throw error
    }
 //const hashedPassword = await hashPassword(password);
  const user = {
    name: name,
    email: email,
    password: password,

  };

  await saveAccount(user);
  return user
}