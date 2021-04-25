const { Assignment } = require('../../models/index');
const {sendMail} = require('../mailing-service');
const team  = require('../team-operations');
const createAssignment = async (data) => {
    const newAssignment = new Assignment({
        ...data
    });
    const assignmentDoc = await newAssignment.save();
    const teamDoc = await team.getTeam(assignmentDoc.team);
    let recipientList='';
    teamDoc.students.forEach(student => {
        recipientList +=`${student.email},`
    });
    const subject = "New Assignment"
    const message = `New  assignmnet has given by ${teamDoc.owner.name} for class ${teamDoc.title}
    Submit at the earliest posible
    
    Thank you`
    try {
        const info = await sendMail(recipientList,message,subject);
        console.log(info);
    } catch (error) {
        console.log(error);
    }
    return assignmentDoc;
};
const getAssignment = async (id) => {
    const assignment = await Assignment.findOne({ _id: id }).populate('team');
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

