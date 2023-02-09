import { User } from "../../models/user.js";
import client from "./databaseClient.js";

export async function saveAccount(user) {
    const createdAccount = await User.create(user)
    await createdAccount.save();
    return createdAccount;
}

// export async function listAccounts(user) {
//     const collection = await User.create(user);
//     const accounts = collection.find();

//     return accounts;
// }

export async function findAccountById(id) {
    const collection = await User.create(user);
    const account = collection.findOne({ id: ObjectId(id) });
    return account;
}