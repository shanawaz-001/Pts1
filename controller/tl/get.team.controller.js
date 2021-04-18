const Team = require('../../models/projectTeamModel');

module.exports = async(req, res) =>{
    await Team.find({projectRef: req.body.projectRef})
    .then(data => res.send(data))
    .catch(error => console.error(error))
}