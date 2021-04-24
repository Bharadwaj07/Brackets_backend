const { Team } = require('../../models/index');


const createTeam = async (data) => {
    const newTeam = new Team({
        ...data
    });

    const teamDoc = newTeam.save();
    return teamDoc;
}
const modifyTeam = async (id, data) => {
    const modifiedDoc = await Team.findOneAndUpdate({ _id: id }, { $set: { ...data } });
    return modifiedDoc;
}

const getAllTeam = async () => {
    const teamLsit = await Team.find({}).populate('students', '-password').populate('owner','-password');
    return teamLsit;
}
const listTeam = async (ownerId) => {
    const teamLsit = await Team.find({ owner: ownerId }).populate('students', '-password');
    return teamLsit;
}
const getTeam = async (id) => {
    const team = await (await Team.findOne({ _id: id }).populate('owner', '-password').populate('students', '-password'));
    return team;
}
const getTeamForStudent = async (studentId) => {
    const teamList = await Team.find({ students: { $all: [studentId] } });
    return teamList;
}
const deleteTeam = async (team_id) => {
    const deletedTeam = await Team.findOneAndRemove({ _id: team_id });

    return deletedTeam;
}

const joinClass = async (teamCode,studentId) =>{
    const modifyTeam = await Team.findOneAndUpdate({ teamCode }, { $push: {students:studentId} });
    return modifyTeam;
}

module.exports = {
    createTeam,
    modifyTeam,
    listTeam,
    deleteTeam,
    getTeamForStudent,
    getTeam,
    getAllTeam,
    joinClass,
}