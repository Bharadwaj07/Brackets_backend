const { Submission } = require('../../models/index');
const {sendMail}= require('../mailing-service');
const user  = require('../user-operations');
const assignment = require('../assignment-operations');

const createSubmission = async (data) => {
    const newSubmission = new Submission({
        ...data
    });
    const submissionDoc = await newSubmission.save();
    const teacher = await user.getUser(submissionDoc.owner);
    const student = await user.getUser(submissionDoc.student);
    const assignmentData = await assignment.getAssignment(submissionDoc.assignment);
    let recipientList= teacher.email;
    const subject = "New Submission"
    const message = `Assignmnet has submitted by ${student.name} for  ${assignmentData.title}
    Thank you`
    try {
        const infor = await sendMail(recipientList,message,subject);
    } catch (error) {
        console.log(error);
    }
    return submissionDoc;
}

const modifySubmission = async (id, data) => {
    const modifiedDoc = await Submission.findOneAndUpdate({ _id: id }, { $set: { ...data } });

    return modifiedDoc;
}

const listAllsubmissions = async () => {
    const listAll = await Submission.find({})
                                    .populate({
                                        path:'assignment',
                                        populate:'team'
                                    })
                                    .populate('owner')
                                    .populate('student');

    return listAll;
}
const listSubmission = async (assignmentId) => {
    const listDoc = await Submission.find({ assignment: assignmentId })
        .populate('assignment')
        .populate('owner')
        .populate('student');

    return listDoc;
}

const getSubmissionForStudent = async (assignment, student) => {
    const listDoc = await Submission.findOne({ assignment, student })
        .populate('assignment')
        .populate('owner')
        .populate('student');

    return listDoc;
}

module.exports = {
    createSubmission,
    modifySubmission,
    listSubmission,
    getSubmissionForStudent,
    listAllsubmissions,
}