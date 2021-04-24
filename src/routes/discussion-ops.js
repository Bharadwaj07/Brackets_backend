const express = require('express');

const router = express.Router();
const discussionHandler = require('../lib/discussion-ops');

router.get('/:roomId',async(req,res) =>{
    try{
        const data = await discussionHandler.getRoom(req.params.roomId);
        res.status(200).send(data);
    }catch(error){
        res.status(500).send(error);
    }
});




module.exports = router;