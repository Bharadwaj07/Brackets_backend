const {post} = require('got');

const compileCode = async(language,code,stdin) =>{
    const body ={
        language,
        code,
        stdin
    }

    return new Promise((resolve,reject) =>{
        post(`${process.env.COMPILE_API}`,{
            json: {
                ...body,
            },
            responseType: 'json'
        }).then((result) =>{
            if(result){
                resolve(result.body);
            }
        }).catch(err =>{
            reject(err);
        });
    });
};

module.exports = compileCode;