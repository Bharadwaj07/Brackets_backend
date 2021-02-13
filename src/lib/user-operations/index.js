const {User} = require('../../models/index');

const registerUser = async(userData) =>{
    const newUser = new User({
        ...userData,
    });
    const userDoc = await newUser.save();

    return userDoc;
};
const listStudents =async(userType)=>{
    const sudentList = await User.find({userType:userType});
    return sudentList;
}
const loginUser = async(userData) =>{
    const userDoc = await User.findOne({email:userData.email,password:userData.password});
    return userDoc;
}



module.exports ={
    registerUser,
    loginUser,
    listStudents,
}