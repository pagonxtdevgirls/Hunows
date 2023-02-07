import { User } from "../../models/user.js";

export async function saveAccount(name,email,password) {
    const createdAccount = await User.create(name,email,password)
    await createdAccount.save();
    return createdAccount;
}