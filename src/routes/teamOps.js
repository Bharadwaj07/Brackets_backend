const express = require('express');
const teamHandler  = require('../lib/team-operations');
const router = express.Router();


// create team 

router.post('/',async(req,res) =>{
    try {
        const data = await teamHandler.createTeam(req.body);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
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
        console.log(data)
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(data);
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