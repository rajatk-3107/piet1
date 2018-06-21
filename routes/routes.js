var express = require('express')
var router = express.Router()



var addPerson = require('./addperson')
router.post('/addPerson', addPerson.addPerson)
router.get('/getPersons', addPerson.getPersons)

var editPerson = require('./editPerson')
router.post('/editPerson', editPerson.editPerson)

module.exports = router