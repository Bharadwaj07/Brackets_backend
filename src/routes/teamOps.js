const express = require('express');
const teamHandler  = require('../lib/team-operations');
const router = express.Router();
const {v4:uuidv4} = require('uuid');

// create team 

router.post('/',async(req,res) =>{
    try {
        const data = await teamHandler.createTeam(req.body);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/uuid',async(req,res) =>{
    try {
        const uuid = uuidv4();

        res.status(200).json({
            classCode:uuid.substr(0,8)
        });
    } catch (error) {
        res.status(500).send(data);
    }
});

router.get('/',async(req,res) =>{
    try {
        const data = await teamHandler.getAllTeam();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(data);
    }
});

router.get('/:owner',async(req,res) =>{
    try {
        const data = await teamHandler.listTeam(req.params.owner);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(data);
    }
});
router.get('/team/:id',async(req,res) =>{
    try {
        const data = await teamHandler.getTeam(req.params.id);

        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(data);
    }
});

router.put('/class/:userId',async(req,res) =>{
    try {
        const data = await teamHandler.joinClass(req.body.teamCode,req.params.userId);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.put('/:id',async(req,res) =>{
    try {
        const data = await teamHandler.modifyTeam(req.params.id,req.body);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete('/:id',async(req,res) =>{
    try {
        const data  = await teamHandler.deleteTeam(req.params.id);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(data);
    }
});

router.get('/student/:id',async(req,res) =>{
    try {
        const data = await teamHandler.getTeamForStudent(req.params.id);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(data);
    }
})

module.exports = router;