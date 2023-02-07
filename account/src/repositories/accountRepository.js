import * as user from "../../models/user.js"
export async function saveAccount(account) {
    return user.create(account);
}