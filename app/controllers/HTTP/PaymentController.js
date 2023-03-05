const Handler = lulu.use('app/errors/Handler');
const PaymentService = lulu.use('app/services/PaymentService');
const response = lulu.use('app/responses/Response');
const Event = lulu.use('app/responses/Event');


module.exports = {
    payment : async function (req, res) {
        try{
            console.log("na asle khobir acahe",req.file)
            const newPayment = await PaymentService.pay({
                username: req.body.username,
                type: req.body.type,
                title: req.body.title,
                note: req.body.note,
                file: req.file,
                date: req.body.date,
                amount: req.body.amount
            });
            return response.dispatch("Payment Successfully", {newPayment}, res, 201); // wrap data in object to avoid confusion
        }
        catch(error){
            return response.error(Handler(error), res);
        }
    }
}
