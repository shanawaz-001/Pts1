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
            devRef:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Employee',
            required: true
            },
            isAssigned:{
                type:Boolean,
                default: 'false'
            }   
        },
    ]
},
{
    collection:'projectTeam'
});

module.exports = mongoose.model("ProjectTeam", projectTeamSchema);
