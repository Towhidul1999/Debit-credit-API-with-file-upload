const LoginAuth = lulu.use('app/models/mongoose/LoginAuth');
const { v4: uuidv4 } = require('uuid');

module.exports = {
    makeSession: async (userEmail) => {
        const token = uuidv4();
        let newSession = new LoginAuth({
            userEmail,
            token
        });
        return await newSession.save();
    },
    checkSession: async (userEmail, token) => {
        return await LoginAuth.findOne({userEmail, token, isExpired: false});
    }
}