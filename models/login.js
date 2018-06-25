var mongoose = require('mongoose')
var Schema = mongoose.Schema



var login = new Schema({
    name: String,
    email: String,
    password: String
})

module.exports = mongoose.model('userLogin', login)