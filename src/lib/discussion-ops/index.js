const { DiscussionRoom } = require('../../models/index');

const createRoom = async (data) => {
    const newRoom = new DiscussionRoom({
        ...data
    });
    const room = await newRoom.save();
    return room;
};
const getRoom = async (roomId) => {
    const  roomDoc= await DiscussionRoom.findOne({ roomId });
    return roomDoc;
};
const updateRoom = async (roomId,data) =>{
    const resultDoc = await DiscussionRoom.findOneAndUpdate({roomId},{
        $push:{messages:data}
    });
    return resultDoc;
}



module.exports = {
    createRoom,
    getRoom,
    updateRoom,
}

