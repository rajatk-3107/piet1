var dbLogin = require('../models/login')
var jwt = require('jsonwebtoken')




exports.register = (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.password) {
        res.json({
            success: false,
            msg: "Please enter all details"
        })
    } else {
        dbLogin.findOne({ email: req.body.email }, (err, loginData) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Something went wrong."
                })
            } else if (!loginData || loginData == null) {
                new dbLogin({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                }).save((err, savedData) => {
                    if (err) {
                        res.json({
                            success: false,
                            msg: "Please try after some time."
                        })
                    } else {
                        res.json({
                            success: true,
                            msg: "Registration done. Please login to continue."
                        })
                    }
                })
            } else {
                res.json({
                    success: false,
                    msg: "You have already registered."
                })
            }
        })


    }
}

exports.login = (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.json({
            success: false,
            msg: "Please enter all details."
        })
    } else {
        dbLogin.findOne({ email: req.body.email }, (err, login) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Please try after some time."
                })
            } else if (!login || login == null) {
                res.json({
                    success: false,
                    msg: "Please login first."
                })
            } else if (login.password != req.body.password) {
                res.json({
                    success: false,
                    msg: "Incorrect Password"
                })
            } else {
                var tokenData = {
                    name: login.name,
                    email: login.email
                }
                var token = jwt.sign(tokenData, 'secret')
                res.json({
                    success: true,
                    token: token,
                    msg: "Login done"
                })
            }
        })
    }
}