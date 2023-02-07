import { User } from "../../models/user.js";

export async function saveAccount(user) {
    console.log(user)
    const createdAccount = await User.create(user)
    console.log(createdAccount)
    await createdAccount.save();
    return createdAccount;
}