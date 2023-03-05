const Handler = lulu.use('app/errors/Handler');
const LoginService = lulu.use('app/services/LoginService');
const response = lulu.use('app/responses/Response');
const Event = lulu.use('app/responses/Event');

module.exports = {
    login : async function (req, res) {
        try{
            const newLogin = await LoginService.check(req.body);
            return response.dispatch("Logged In Successfully", {newLogin}, res, 201); // wrap data in object to avoid confusion
        }
        catch(error){
            return response.error(Handler(error), res);
        }
    }
}