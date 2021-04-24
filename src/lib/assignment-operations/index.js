const { Assignment } = require('../../models/index');

const createAssignment = async (data) => {
    const newAssignment = new Assignment({
        ...data
    });
    const assignmentDoc = await newAssignment.save();
    return assignmentDoc;
};
const getAssignment = async (id) => {
    const assignment = await Assignment.findOne({ _id: id });
    return assignment;
};
const getAssignmentForStudent = async (studentId) =>{
    const resultDoc = await Assignment.find({}).populate({
        path:'team',
        model:'Team',
        match:{
            students:{$all:[studentId]}
        },
    });
    const studentsAssignment = resultDoc.filter(assignment => assignment.team !== null);
    return studentsAssignment;
}

const modifyAssignment = async (id, data) => {
    const modifiedDoc = await Assignment.findOneAndUpdate({ _id: id }, { $set: { ...data } });
    return modifiedDoc;
};

const deleteAssignment = async (id) => {
    const deletedDoc = await Assignment.findByIdAndRemove({ _id: id });
    return deletedDoc;
};

const getAssignmentForClass = async(classId) =>{
    const assignmentList = await Assignment.find({ team: classId }).populate('owner', '-password').populate('team');

    return assignmentList;
}
const listAssignments = async (ownerID) => {
    const assignmentList = await Assignment.find({ owner: ownerID })
        .populate('owner', '-password').populate('students', '-password').populate('team');

    return assignmentList;
};

const getAllAssignments = async (ownerID) => {
    const assignmentList = await Assignment.find({})
        .populate('owner', '-password').populate('students', '-password').populate('team');

    return assignmentList;
};

module.exports = {
    createAssignment,
    modifyAssignment,
    deleteAssignment,
    listAssignments,
    getAllAssignments,
    getAssignmentForStudent,
    getAssignmentForClass,
    getAssignment,
}

