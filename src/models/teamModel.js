const mongoose  = require('mongoose');

const TeamSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    owner:{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:'User'

    },
    students:[{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:'User'
    }],
});

const Team = mongoose.model('Team',TeamSchema);

module.exports = Team;