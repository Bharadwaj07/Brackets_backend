const express  = require('express');
const submissionHandler = require('../lib/submission-operations');

const router = express.Router();

router.get('/',async(req,res) =>{
    try {
        const data = await submissionHandler.listAllsubmissions();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/:assignmentId',async(req,res) =>{
    try {
        const data = await submissionHandler.listSubmission(req.params.assignmentId);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/:assignmentId/:studentId',async(req,res) =>{
    try {
        const data = await submissionHandler.getSubmissionForStudent(req.params.assignmentId,req.params.studentId);
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

router.put('/:id',async(req,res) =>{
    try {
        const data = await submissionHandler.modifySubmission(req.params.id,req.body);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;