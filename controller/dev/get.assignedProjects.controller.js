const jwt = require('jsonwebtoken');
const Team = require('../../models/projectTeamModel');
const Project = require('../../models/projectModel');
module.exports = async(req,res)=>{
    const token = req.header('authorization');
    try {
        const decode = jwt.decode(token);
        const team = await Team.findOne({"teamMembers.devRef": decode.id});
        const project = await Project.findById(team.projectRef).populate("managerId","name").exec((err,data)=>{
            if(err) return res.status(400).send({type:'error', message:err.message});
            return res.status(200).send(data);
        });
    } catch (error) {
        console.log(error);
        res.status(400).send({type:'error', message:`can't connect to the server`});
    }
}