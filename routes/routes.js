var express = require('express')
var router = express.Router()
var tokenVerify = require('./tokenVerify')



var addPerson = require('./addperson')
router.post('/addPerson', tokenVerify.tokenVerify, addPerson.addPerson)
router.get('/getPersons', tokenVerify.tokenVerify, addPerson.getPersons)

var editPerson = require('./editPerson')
router.post('/editPerson', tokenVerify.tokenVerify, editPerson.editPerson)

var registerLogin = require('./RegisterAndLogin')
router.post('/register', registerLogin.register)
router.post('/login', registerLogin.login)

module.exports = router