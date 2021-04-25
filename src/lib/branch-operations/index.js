const { Branch } = require('../../models/index');


const createBranch = async (data) => {
    const newBranch = new Branch({
        ...data
    });

    const BranchDoc = newBranch.save();
    return BranchDoc;
}
const modifyBranch = async (id, data) => {
    const modifiedDoc = await Branch.findOneAndUpdate({ _id: id }, { $set: { ...data } });
    return modifiedDoc;
}
const getAllBranchForTeacher = async (team) => {
    const BranchLsit = await Branch.find({team});
    return BranchLsit;
}
const getAllBranch = async () => {
    const BranchLsit = await Branch.find({}).populate('students', '-password').populate('owner','-password');
    return BranchLsit;
}

const getBranchForStudent = async (studentId) => {
    const BranchList = await Branch.find({ students: { $all: [studentId] } });
    return BranchList;
}
const deleteBranch = async (branch_id) => {
    const deletedBranch = await Branch.findOneAndRemove({ _id: branch_id });

    return deletedBranch;
}


module.exports = {
    createBranch,
    modifyBranch,
    deleteBranch,
    getBranchForStudent,
    getAllBranch,
    getAllBranchForTeacher
}