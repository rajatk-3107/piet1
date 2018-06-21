var dbPerson = require('../models/person')





exports.editPerson = (req, res) => {
    if (!req.body.id || !req.body.name || !req.body.phone || !req.body.age) {
        res.json({
            success: falsse,
            msg: "Please enter all details"
        })
    } else {
        dbPerson.findOne({ _id: req.body.id }, (err, data) => {
            if (err) {
                res.json({
                    success: fasle,
                    msg: "Something went wrong"
                })
            } else if (!data) {
                res.json({
                    success: false,
                    msg: "User not found"
                })
            } else {
                dbPerson.findOneAndUpdate({ _id: req.body.id }, { $set: { name: req.body.name, age: req.body.age, phone: req.body.phone } }, (err, data) => {
                    if (err) {
                        res.json({
                            success: false,
                            msg: "Something went wrong."
                        })
                    } else {
                        res.json({
                            success: true,
                            msg: "Data Updated"
                        })
                    }
                })
            }
        })
    }
}