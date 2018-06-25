var mongoose = require('mongoose')
var Schema = mongoose.Schema




var person = new Schema({
    name: {
        type: String,
        required: true
    },

    age: Number,
    phone: {
        type: Number,
        unique: true
    },

    address: {
        line1: String,
        line2: String,
        city: String,
        state: String,
        pincode: Number,
        country: String
    },
    hobbies: [String],
    createdBy: String
})

module.exports = mongoose.model('people', person)