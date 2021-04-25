const express = require('express');
const branchHandler = require('../lib/branch-operations');
const router = express.Router();

router.get('/',async(req,res) =>{
    try {
        const data = await branchHandler.getAllBranch();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
});
router.get('/:classId',async(req,res) =>{
    try {
        const data = await branchHandler.getAllBranchForTeacher(req.params.classId);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
});
router.post('/',async(req,res) =>{
    try {
        const data = await branchHandler.createBranch(req.body);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.put('/:id',async(req,res) =>{
    try {
        const data = await branchHandler.modifyBranch(req.params.id,req.body);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete('/:id',async(req,res) =>{
    try {
        const data = await branchHandler.deleteBranch(req.params.id);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;