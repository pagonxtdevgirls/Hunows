import { User } from "../../models/user.js";

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
export async function getUsersCollection() {

    const allUsers = await User.findAll();
    return allUsers
}

export async function findOneUser(id) {

    const user = await User.findOne({
        where: { id: id },

    });
    return user

}

export async function existsByEmail(email) {
    const possibleUser = await findUserByEmail(email);
    return !!possibleUser;
}





