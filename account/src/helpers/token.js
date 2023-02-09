import jwt  from 'jsonwebtoken';

export function generateToken (id, name) {
    const tokenSecret = process.env.TOKEN_SECRET;
    const tokenExpires = process.env.TOKEN_EXPIRATION;

    const token = jwt.sign({ userId: id, nameUser: name}, tokenSecret, { expiresIn: `${tokenExpires}s` });

    return token;
}