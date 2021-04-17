const jwt = require('jsonwebtoken');
const Project = require('../../models/projectModel');
const Team = require('../../models/projectTeamModel');
const  mongoose  = require('mongoose');

//assigned projects of pm---------------------------------
module.exports = async(req, res) =>{
    const token = req.header('authorization');
    const decode = jwt.decode(token);
    await Team.find({},{teamLeader: decode.id}).populate('projectRef','projectTitle').sort('projectTitle')
    .then(data => res.send(data))
    .catch(error => console.error(error))
}