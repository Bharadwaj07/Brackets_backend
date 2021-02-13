const mongoose  = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
        trim:true,
    },
    userType:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        minLength:6,
    },
});

const User = mongoose.model('User',UserSchema);

module.exports = User;