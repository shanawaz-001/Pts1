const Task = require('../../models/projectTaskModel');

module.exports = async(req, res) =>{
    await Task.find({projectRef: req.body.projectRef})
    .then(data => res.send(data))
    .catch(error => console.error(error))
}