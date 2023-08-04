

const jwt = require('jsonwebtoken')


const token = (payload,secret, expires) =>{ 
    const jwttoken = jwt.sign(payload,secret,{ 
        expiresIn: "10m"
    }); 
    return jwttoken 
}

module.exports = { 
    token
}