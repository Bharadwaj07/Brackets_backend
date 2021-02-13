const {Team} = require('../../models/index');


const createTeam = async(data) =>{
    const newTeam = new Team({
        ...data
    });

    const teamDoc = newTeam.save();
    return teamDoc;
}
const modifyTeam = async(id,data) =>{
    const modifiedDoc = await Team.findOneAndUpdate({_id:id},{$set:{...data}});
    return modifiedDoc;
}
const listTeam = async(ownerId) =>{
    const teamLsit = await Team.find({owner:ownerId}).populate('owner').populate('students');
    return teamLsit;
}

const deleteTeam = async (team_id) =>{
    const deletedTeam = await Team.findOneAndRemove({_id:team_id});

    return deletedTeam;
}

module.exports = {
    createTeam,
    modifyTeam,
    listTeam,
    deleteTeam,
}