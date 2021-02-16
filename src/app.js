const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const userOpsRouter = require('./routes/userOperations');
const teamOpsRouter = require('./routes/teamOps');
const assignmentOpsRouter = require('./routes/assignmentOps');
const submissionOpsRouter = require('./routes/submissionOps');
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
app.use(verifyToken);
app.use('/team-operations',teamOpsRouter);
app.use('/assignment-operations',assignmentOpsRouter);
app.use('/submission-operations',submissionOpsRouter);


module.exports = app;