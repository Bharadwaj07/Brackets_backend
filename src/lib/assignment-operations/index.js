const { Assignment } = require('../../models/index');

const createAssignment = async (data) => {
    console.log(data);
    const newAssignment = new Assignment({
        ...data
    });
    const assignmentDoc = await newAssignment.save();
    console.log("success",assignmentDoc)
    return assignmentDoc;
};

const getAssignmentForStudent = async (studentId) =>{
    const resultDoc = await Assignment.find({}).populate({
        path:'team',
        populate:{
            path:'students',
            model:'User',
            match:studentId
        }
    });
    return resultDoc;
}

const modifyAssignment = async (id, data) => {
    const modifiedDoc = await Assignment.findOneAndUpdate({ _id: id }, { $set: { ...data } });
    return modifiedDoc;
};

const deleteAssignment = async (id) => {
    const deletedDoc = await Assignment.findByIdAndRemove({ _id: id });
    return deletedDoc;
};

const listAssignments = async (ownerID) => {
    const assignmentList = await Assignment.find({ owner: ownerID })
        .populate('owner', '-password').populate('students', '-password');

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
    getAssignmentForStudent
}

