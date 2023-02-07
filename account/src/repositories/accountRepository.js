export async function saveAccount(account) {
    const createdAccount = await Account.create(account, {
   
    });
    await createdAccount.save();
    return createdAccount;
}