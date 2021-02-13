'use strict';
require('dotenv').config()
var jwt = require('jsonwebtoken');


module.exports.AuthVerification = function (req, authOrSecDef, token, callback) {
    if (!req.headers.authorization || req.session) {
        var fullHeaderAuth = req.headers.authorization
        var split = fullHeaderAuth.split(':');
        var secondSplit = split[1].split('}');
        var token = secondSplit[0];
        jwt.verify(token, process.env.JWT_KEY, function (err, decoded) {
            if (!err)
                if (req.sessionID === fullHeaderAuth)
                    return callback();
        });
    }
    else {
        console.log('No session')
        return callback(new Error('Unauthorized.'));
    }
}