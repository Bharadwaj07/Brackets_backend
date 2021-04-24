const { Evaluate } = require('../../models/index');

const createEvaluation = async (data) => {
    const evaluation = new Evaluate({
        ...data
    });
    const evaluationDoc = await evaluation.save();
    return evaluationDoc;
};
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
}

