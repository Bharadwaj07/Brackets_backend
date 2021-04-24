const mongoose  = require('mongoose');

const BranchShcema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    team:{
        type:mongoose.Types.ObjectId,
        ref:'Team'
    },
    students:[{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }],
});

const Branch = mongoose.model('Branch',BranchShcema);

module.exports = Branch;