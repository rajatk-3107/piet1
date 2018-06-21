var express = require('express')
var app = express()
var mongoose = require('mongoose')
var config = require('./config/config.json')
const PORT = process.env.port || config.port
var dbperson = require('./models/person.js')
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
var routes = require('./routes/routes')


mongoose.connect('mongodb://localhost/qwerty', (err, data) => {
    if (err) {
        console.log('Database not connected')
    } else {
        console.log('Database connected')
    }
})

app.use('/user', routes)


app.listen(PORT, () => {
    console.log("Sevrer started")
})