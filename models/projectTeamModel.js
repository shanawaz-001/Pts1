const mongoose = require("mongoose");

const projectTeamSchema = new mongoose.Schema({

    projectRef:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Project',
        required: true
    },
    teamLeader: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    teamMembers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Employee',
            required: true
        }
    ]
},
{
    collection:'projectTeam'
});

module.exports = mongoose.model("ProjectTeam", projectTeamSchema);
