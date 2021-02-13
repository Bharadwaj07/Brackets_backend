const http = require('http');
const mongoose = require('mongoose');

const app = require('../src/app');


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false,
    poolSize:10,
});

const dbConnection = mongoose.connection;

function normalizePort(val){
    const portToNormalize = parseInt(val,10);
    if(Number.isNaN(portToNormalize)){
        return val
    }
    if(portToNormalize >= 0){
        return portToNormalize;
    }
    return false
}


const port = normalizePort(process.env.PORT || '3000');
app.set('port',port);
const server = http.createServer(app)

// event listning for hhtp error

function onError(error){
    if(error.syscall !=='listen'){
        throw error;
    }
    const bind = typeof port ==='string' ?`Pipe${port}`:`Port${port}`;

    switch(error.code){
        case 'EACCES':
            console.error(` ${bind} requires elevated privilages`);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            break;
        default:
            throw error;
    }
}


function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string' ?`pipe ${addr}`:`${port} addr.port`;
    console.info(`server listning on : ${bind}`);
}

server.on('error',onError);
server.on('listening',onListening);

dbConnection.on('error',(error) => console.error(` dbConnection error: ${error}`));

dbConnection.once('open' ,() =>{
    console.info('Connected to DB');
    server.listen(port);
})