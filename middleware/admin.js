const jwt =require("jsonwebtoken");
const secret = require("../index")
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const words = token.split('');
    const jwtToken = words[1];
    const decodedValue= jwtToken.verify(jwtToken , secret);
    if(decodedValue.username){
        next();

    }else{
        res.send(403).json(
            {
                msg:"u r not authenticate"
            }
        )
    }
   

}

module.exports = adminMiddleware;