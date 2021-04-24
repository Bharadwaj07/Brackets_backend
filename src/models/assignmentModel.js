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
        trim:true,
    },
    outputSample:{
        type:String,
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
    team:{
        type:mongoose.Types.ObjectId,
        ref:'Team'
    },
    submission:{
        type:Date,
        require:true
    },
    maxScore:{
        type:Number
    },
    testCases:[{
        title:{
            type:String,
        },
        inputs:{
            type:String,
        },
        outputs:{
            type:String,
        },
        _id:false
    }]
});

const Assignment = mongoose.model('Assignment',AssignmentSchema);

module.exports = Assignment;