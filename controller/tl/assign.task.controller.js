const jwt = require('jsonwebtoken');
const Task = require('../../models/projectTaskModel');

//assigned projects of pm---------------------------------
module.exports = async(req, res) =>{
    const token = req.header('authorization');
    const decode = jwt.decode(token);
    await Task.find({managerI: decode.id}).sort('projectTitle')
    .then(data => res.send(data))
    .catch(error => console.error(error))
}