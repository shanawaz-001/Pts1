const Employee = require('../../models/employeeModel');
const Task = require('../../models/projectTaskModel');
const Team = require('../../models/projectTeamModel');

module.exports = async(req,res)=>{
    const { projectRef, teamLeader, teamMembers} = req.body;
    try {
        Team.create({
            projectRef,
            teamLeader,
            teamMembers
        },async(err,dt)=>{
            if(err) return res.status(400).send({type:'error', message: err.message});
            else{
                res.status(200).send({type:'success',message:'Task is added to the project'});
            }
        })
        
    } catch (error) {
        console.error(error);
        res.status(500).send({type: 'error', message: 'Error while connecting to the server!'});
    }
}