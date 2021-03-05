const express = require('express');
const userHandler = require('../lib/user-operations');
const generateJwt = require('../utils/generate-jwt');
const router = express.Router();

// register
router.post('/',async(req,res) =>{
    console.log(req.body)
    try{
        const data = await userHandler.registerUser(req.body);
        res.status(200).send(data);
    }catch(error){
        res.status(500).send(error);
    }
});

// login
router.post('/login',async(req,res) =>{
    // console.log(req.body)
    try{
        const data = await userHandler.loginUser(req.body);
        if(data){
            const token = await generateJwt(data);
            res.status(200).send({token:token,success:true});
        }
    }catch(error){
        // console.log("error",error);
        res.send(error);
    }
});

router.get('/:userType',async(req,res) =>{
    try {
        const data = await userHandler.listStudents(req.params.userType);
        res.status(200).send(data);
    } catch (error) {
        res.send(error);
    }
})

module.exports = router;