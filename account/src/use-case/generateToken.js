import { comparePassword } from "../helpers/password.js";
import { generateToken } from "../helpers/token.js";
import { findAccountByEmail } from "../repositories/accountRepository.js";

export async function generateUserToken(email, password) {
  const user = await findAccountByEmail(email);
  if (!user) {
    return null;
  }
  const passwordCheck = await comparePassword(password, possibleUser.password);
  if (!passwordCheck) {
    return null;
  }
  return generateToken(user.id);
}
