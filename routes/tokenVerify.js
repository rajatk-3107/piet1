var jwt = require('jsonwebtoken')




exports.tokenVerify = (req, res, next) => {
    if (!req.headers['x-access-token']) {
        res.json({
            success: false,
            msg: "You are not authenticated"
        })
    } else {
        jwt.verify(req.headers['x-access-token'], 'secret', (err, decoded) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Authentication failed"
                })
            } else {
                req.decoded = decoded
                next();
            }
        })
    }
}