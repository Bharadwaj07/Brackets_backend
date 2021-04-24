const { Submission } = require('../../models/index');

const createSubmission = async (data) => {
    const newSubmission = new Submission({
        ...data
    });
    const submissionDoc = await newSubmission.save();
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