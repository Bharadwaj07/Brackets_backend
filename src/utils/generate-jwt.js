const jwt = require('jsonwebtoken');

const generateJwt = async (data) =>{
    const userData = {
        _id:data._id,
        name:data.name,
        email:data.email,
        userType:data.userType,
    };
    const token = await jwt.sign(userData,process.env.SECRET_KEY);
    return token;
}

module.exports = generateJwt;