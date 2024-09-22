// import jsonwebtoken

const jwt = require('jsonwebtoken')

//creating function for generating a token
// it has 2 param one is res which is used to send res to the client
//other is userId which is used in encoding

const generateToken = (res, userId) =>{
    // jwt.sign is used for creating token
    // it has 3 params one userId and a string which will be used for decoding
    // last is expiry date
    const token = jwt.sign({userId}, "keep smiling",{
    expiresIn: '30d'
    })
    // send the res in cookie token using name jwt
    
    res.cookie("jwt", token,{
        httpOnly: true,
        secure: true,
        samesite: 'strict',
        maxAge: 30*24*60*1000

    })
}

exports.generateToken = generateToken