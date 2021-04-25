const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const userOpsRouter = require('./routes/userOperations');
const teamOpsRouter = require('./routes/teamOps');
const assignmentOpsRouter = require('./routes/assignmentOps');
const submissionOpsRouter = require('./routes/submissionOps');
const compileRouter = require('./routes/compile');
const evaluationRouter = require('./routes/evaluationOps');
const disscussionRouter = require('./routes/discussion-ops');
const branchRouter = require('./routes/branchOps');
const verifyToken = require('./middleware/verify-token');
require('dotenv').config();

const app = express();


app.use(
    cors({
        origin: [
            'http://localhost:4200', // Frontend URL
        ],
    })
);

// Required for parsing json bodies.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',indexRouter);
app.use('/user-operations',userOpsRouter);
app.use('/team-operations',verifyToken,teamOpsRouter);
app.use('/assignment-operations',verifyToken,assignmentOpsRouter);
app.use('/submission-operations',verifyToken,submissionOpsRouter);
app.use('/compile',verifyToken,compileRouter);
app.use('/evaluate',verifyToken,evaluationRouter);
app.use('/discuss',verifyToken,disscussionRouter);
app.use('/branch',verifyToken,branchRouter);


module.exports = app;