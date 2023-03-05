const User = require('../models/mongoose/User');
const { db } = require('../helpers');
const LoginAuthSessionService = require('../services/LoginAuthSessionService');

async function check (data) {
    console.log("Login:", data)


    const user = await userLogin(data.email, data.password)
    
    console.log(user)
    
    if (user) {
        const session = await LoginAuthSessionService.makeSession(data.email);
        return {
            userEmail: data.email,
            token: session.token
        };
    }else{
        return "Wrong Credentials"
    }

    
};

async function userLogin(email, password){
    console.log("superf:", email, password)
    return await User.findOne({email: email, password: password});
}

module.exports = {
    check
}
