const mongoose  = require('mongoose');

const SubmissionSchema = new mongoose.Schema({
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
    assignmentBody:{
        type:String,
    },
    submissionDate:{
        type:Date,
    },
});

const Submission = mongoose.model('Submission',SubmissionSchema);

module.exports = Submission;