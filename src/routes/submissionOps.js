const express  = require('express');
const submissionHandler = require('../lib/submission-operations');

const router = express.Router();

router.get('/:assignmentId',async(req,res) =>{
    try {
        const data = await submissionHandler.listSubmission(req.params.assignmentId);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/',async(req,res) =>{
    try {
        const data = await submissionHandler.createSubmission(req.body);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.put('/:assignmentId',async(req,res) =>{
    try {
        const data = await submissionHandler.modifySubmission(req.params.assignmentId,req.body);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;