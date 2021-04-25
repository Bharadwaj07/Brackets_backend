const express  = require('express');
const evaluationHandler = require('../lib/evaluation-ops');

const router = express.Router();

router.get('/',async(req,res) =>{
    try {
        const data = await evaluationHandler.listAllEvaluation();
        res.status(200).send(data);
        
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/:assignmentId',async(req,res) =>{
    try {
        const data = await evaluationHandler.getAllEvaluation(req.params.assignmentId);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/:student/:assignmentId',async(req,res) =>{
    try {
        const data = await evaluationHandler.getEvaluationForAssignmnet(req.params.student,req.params.assignmentId);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/student/assignment/:student',async(req,res) =>{
    try {
        const data = await evaluationHandler.getAllStudentEvaluation(req.params.student);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
});
router.post('/',async(req,res) =>{
    try {
        const data = await evaluationHandler.createEvaluation(req.body);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
});

// router.put('/:id',async(req,res) =>{
//     try {
//         const data = await evaluationHandler.modifySubmission(req.params.id,req.body);
//         res.status(200).send(data);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

module.exports = router;