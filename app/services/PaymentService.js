const Payment = require('../models/mongoose/Payment');
// const QuizOption = require('../models/mongoose/QuizOption');
const NotFoundError = lulu.use('app/errors/NotFoundError');
// const Comment = lulu.use('app/models/mongoose/Quiz');

module.exports = {
    pay: async function (data) {

        console.log("Service:", data.file.filename)

        const newPay = new Payment({
            username: data.username,
            type: data.type,
            title: data.title,
            amount: data.amount,
            note: data.note,
            date: data.date,
            file: data.file.filename,
        });

        console.log(data.type)

        await newPay.save();
        return newPay;
    }
}