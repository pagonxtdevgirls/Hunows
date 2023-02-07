export async function saveAccount(account) {
    const createdAccount = await account.create(account, {
   
    });
    await createdAccount.save();
    return createdAccount;
}