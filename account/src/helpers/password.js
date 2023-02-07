import  bcrypt from 'bcryptjs';

export async function hashPassword(password) {
    const hashedPassword = await bcrypt.hash(password, parseInt(process.env.HASH_SALT));
    return hashedPassword;
}

export async function comparePassword(password, hashedPassword) {
    const isMatch = await bcrypt.compare(password, hashedPassword);

    return isMatch;
}