import { User } from "../../models/user.js";
import client from "../repositories/databaseClient.js" 

export async function saveAccount(user) {
    const createdAccount = await User.create(user)
    await createdAccount.save();
    return createdAccount;
}
export async function findUserByEmail(email) {
    //const usersCollection = await getUsersCollection();
    //console.log (usersCollection)
    const user = await User.findOne({ where: {email} });
    return user;
} 
async function getUsersCollection() {

    const allUsers = await User.findAll();
    return allUsers
}