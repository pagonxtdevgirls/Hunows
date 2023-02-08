import { User } from "../../models/user.js";

export async function saveAccount(user) {
  const createdAccount = await User.create(user);
  await createdAccount.save();
  return createdAccount;
}

export async function findAccountByEmail(email) {
  const users = await User.findAll({ email });
  return users;
}
