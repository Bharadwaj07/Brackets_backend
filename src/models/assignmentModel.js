const mongoose  = require('mongoose');

const AssignmentSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
    },
    question:{
        type:String,
        required:true,
        trim:true,
    },
    inputSample:{
        type:String,
        required:true,
        trim:true,
    },
    outputSample:{
        type:String,
        required:true,
        trim:true,
    },
    language:{
        type:String,
        required:true,
        trim:true,
    },
    owner:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    },
    team:[{
        type:mongoose.Types.ObjectId,
        ref:'Team'
    }],
});

const Assignment = mongoose.model('Assignment',AssignmentSchema);

module.exports = Assignment;