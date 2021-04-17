const jwt = require('jsonwebtoken');
const Project = require('../../models/projectModel');
//assigned projects of pm---------------------------------
module.exports = async(req, res) =>{
    const token = req.header('authorization');
    const decode = jwt.decode(token);
    await Project.find({managerId: decode.id}).sort('projectTitle')
    .then(data => res.send(data))
    .catch(error => console.error(error))
}