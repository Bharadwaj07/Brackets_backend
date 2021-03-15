const express = require('express');

const router = express.Router();
const compileCode = require('../lib/compile-code');
router.post('/',async(req,res) =>{
    try{
        console.log(req.body);
        const {language,code,stdin} = req.body;
        const data = await compileCode(language,code,stdin);
        res.status(200).send(data);
    }catch(error){
        res.status(500).send(error);
    }
});



module.exports = router;