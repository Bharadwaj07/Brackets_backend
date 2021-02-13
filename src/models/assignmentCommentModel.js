const mongoose  = require('mongoose');

const CommentSchema = new mongoose.Schema({
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
});

const Comment = mongoose.model('Comment',CommentSchema);

module.exports = Comment;