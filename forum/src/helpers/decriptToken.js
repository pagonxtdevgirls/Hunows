const jwt = require('jsonwebtoken');

function decriptToken(token) {
    try {
        const tokenSecret =process.env.TOKEN_SECRET;
        const { userId, nameUser } = jwt.verify(token, tokenSecret);

        return { userId, nameUser }; 

    } catch(error){
        console.log('error when verifying token', error.message);
        return {};
    }
}

module.exports = {decriptToken}