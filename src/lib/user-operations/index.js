const {User} = require('../../models/index');

const registerUser = async(userData) =>{
    const newUser = new User({
        ...userData,
    });
    const userDoc = await newUser.save();

    return userDoc;
};
const getUser = async (id) =>{
    const userDoc = await User.findOne({_id:id},{password:0});
    return userDoc;
}
const listAllUsers = async() =>{
    const userList = await User.find({},{password:0});
    return userList;
}

const modifyUserType = async (id,userType) =>{
    const update = await User.findOneAndUpdate({_id:id},{
        $set:{userType:userType}
    })
    return update;
}
const listStudents =async(userType)=>{
    const sudentList = await User.find({userType:userType},{password:0});
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
    listAllUsers,
    modifyUserType,
    getUser,
}