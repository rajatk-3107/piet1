var dbPerson = require('../models/person')




exports.addPerson = (req, res) => {
    if (!req.body.name || !req.body.age || !req.body.phone) {
        res.json({
            success: false,
            msg: "Please enter all details"
        })
    } else {
        new dbPerson({
            name: req.body.name,
            age: req.body.age,
            phone: req.body.phone,
            address: {
                line1: req.body.line1,
                line2: req.body.line2,
                city: req.body.city,
                state: req.body.state,
                pincode: req.body.pincode,
                country: req.body.country
            },
            createdBy: req.decoded.email
        }).save((err, data) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Something went wronng.Please try after some time."
                })
            } else {
                res.json({
                    success: true,
                    msg: "New Person added"
                })
            }
        })
    }
}

exports.getPersons = (req, res) => {
    // console.log(req.decoded)
    dbPerson.find({ createdBy: req.decoded.email }, (err, data) => {
        if (err) {
            res.json({
                success: false,
                msg: "Somethin went wrong"
            })
        } else {
            res.json({
                success: true,
                msg: "All persons",
                data: data
            })
        }
    })
}