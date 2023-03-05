const mongoose = require('mongoose');

// fields definition
const fields = {
    username: {
        type: String
    },
    type : {
        type : String,
        required: true
    },
    amount: {
        type: String,
        // required: true
    },
    title : {
        type : String,
        required: true,
    },
    note: {
        type: String,
        select: false
    },
    date: {
        type: String
    },
    file:
    {
        type: String
    }
}

// wrap fields with mongoose schema
const schema = mongoose.Schema(fields, {timestamps: true})

// wrap schema with mongoose model
const model = mongoose.model('Payment', schema);

module.exports = model;