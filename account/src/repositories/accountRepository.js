import { User } from "../../models/user.js";

export async function saveAccount(user) {
    const createdAccount = await User.create(user)
    await createdAccount.save();
    return createdAccount;
}