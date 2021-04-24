const mongoose  = require('mongoose');

const DiscussionRoomSchema = new mongoose.Schema({
    roomId:{
        type:String,
    },
    name:{
        type:String,
    },
    messages:[{
        user:{
            type:String,
        },
        message:{
            type:String
        },
    }],

});

const DiscussionRoom = mongoose.model('DiscussionRoom',DiscussionRoomSchema);

module.exports = DiscussionRoom;