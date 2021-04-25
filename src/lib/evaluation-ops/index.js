const { Evaluate } = require('../../models/index');
const {sendMail} = require('../mailing-service');
const user  = require('../user-operations');
const assignment = require('../assignment-operations');

const createEvaluation = async (data) => {
    const evaluation = new Evaluate({
        ...data
    });
    const evaluationDoc = await evaluation.save();
    const teacher = await user.getUser(evaluationDoc.owner);
    const student = await user.getUser(evaluationDoc.student);
    const assignmentData = await assignment.getAssignment(evaluationDoc.assignment);
    let recipientList= student.email;
    const subject = "Assignment has been Evaluated"
    const message = `your ${assignmentData.title} assignmnet has been evaluated  by ${teacher.name} .
    your marks is ${evaluationDoc.score} out of ${assignmentData.maxScore}.

    Thank you`
    try {
        const infor = await sendMail(recipientList,message,subject);
    } catch (error) {
        console.log(error);
    }
    return evaluationDoc;
};
const listAllEvaluation = async () =>{
    const listAll = await Evaluate.find({});
    return listAll;
}
const getAllEvaluation = async (assignment) => {
    const  evaluationDoc= await Evaluate.find({ assignment });
    return evaluationDoc;
};
const getEvaluationForAssignmnet = async (student,assignment) =>{
    const resultDoc = await Evaluate.findOne({assignment,student});
    return resultDoc;
}

const getAllStudentEvaluation = async (student) => {
    const  evaluationDoc= await Evaluate.find({ student });
    return evaluationDoc;
};

module.exports = {
    createEvaluation,
    getAllEvaluation,
    getEvaluationForAssignmnet,
    getAllStudentEvaluation,
    listAllEvaluation,
}

