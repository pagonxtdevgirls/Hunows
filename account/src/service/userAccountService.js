
export async function createUser(name, email, password) {
 //const hashedPassword = await hashPassword(password);
  const user = {
    name: name,
    email: email,
    password: hashedPassword,

  };

  await saveAccount(user);
  return user

}