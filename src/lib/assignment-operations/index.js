const {Assignment} = require('../../models/index');

const createAssignment = async (data) =>{
    const newAssignment = new Assignment({
        ...data
    });
    const assignmentDoc = await newAssignment.save();
    return assignmentDoc;
};

const modifyAssignment = async(id,data) =>{
    const modifiedDoc = await Assignment.findOneAndUpdate({_id:id},{$set:{...data}});
    return modifiedDoc;
};

const deleteAssignment = async(id) =>{
    const deletedDoc = await Assignment.findByIdAndRemove({_id:id});
    return deletedDoc;
};

const listAssignments = async(ownerID) =>{
    const assignmentList = await Assignment.find({owner:ownerID})
                                            .populate('owner')
                                            .populate('team');

    return assignmentList;
};

module.exports = {
    createAssignment,
    modifyAssignment,
    deleteAssignment,
    listAssignments,
}

