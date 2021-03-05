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
const loginUser = (userData) =>{
    return new Promise((resolve,reject) =>{
        User.findOne({email:userData.email,password:userData.password})
            .then(result =>{
                if(result){
                    resolve(result)
                }else{
                    const message = "Invalid user credential"
                    reject({message:message});
                }
            })
            .catch(err =>{
                reject(err);
            })
    });
}



module.exports ={
    registerUser,
    loginUser,
    listStudents,
}