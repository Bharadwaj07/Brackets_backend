const express = require('express');
const assignmentHandler  = require('../lib/assignment-operations');
const router = express.Router();

router.get('/:owner',async(req,res) =>{
    try {
        const data = await assignmentHandler.listAssignments(req.params.owner);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/',async(req,res) =>{
    try {
        const data = await assignmentHandler.createAssignment(req.body);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.put('/:id',async(req,res) =>{
    try {
        const data = await assignmentHandler.modifyAssignment(req.params.id,req.body);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete('/:id',async(req,res) =>{
    try {
        const data = await assignmentHandler.deleteAssignment(req.params.id);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;