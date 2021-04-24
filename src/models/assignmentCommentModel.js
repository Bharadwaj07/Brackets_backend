const mongoose  = require('mongoose');

const EvaluateSchema = new mongoose.Schema({
    assignment:{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:'Assignment'
    },
    owner:{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:'User'
    },
    student:{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:'User'
    },
    comment:{
        type:String,
    },
    score:{
        type:Number
    }
});

const Evaluate = mongoose.model('Evaluate',EvaluateSchema);

module.exports = Evaluate;