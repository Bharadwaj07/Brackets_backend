const jwt = require('jsonwebtoken');

const verifyToken = async (req,res,next) =>{
    const bearerHeader = req.headers.authorization;
    if(typeof bearerHeader !== 'undefined'){
        const bearerToken = bearerHeader.split(' ');
        const token = bearerToken[1];
        const user = await jwt.verify(token,process.env.SECRET_KEY);
        req.user = user;
        next();
    }else{
        res.sendStatus(403);
    }
};

module.exports = verifyToken;