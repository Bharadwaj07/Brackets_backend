const User = require('./userModel');
const Assignment = require('./assignmentModel');
const Submission = require('./submissionModel');
const Team = require('./teamModel');
const Evaluate = require('./assignmentCommentModel');
const Branch = require('./branchModel');
const DiscussionRoom = require('./discussionModel');
module.exports = {
    User,
    Assignment,
    Submission,
    Team,
    Evaluate,
    Branch,
    DiscussionRoom
}