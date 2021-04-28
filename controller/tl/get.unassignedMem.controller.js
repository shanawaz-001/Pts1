const Team = require('../../models/projectTeamModel');
const Task = require('../../models/projectTaskModel');
const assignedTask = require('../../models/assignTaskModel');
module.exports = async(req, res) =>{
   try {
     team =  await Team.find({projectRef: req.body.projectRef}).populate('teamMembers','_id');
     if(!team) res.status(500).send({type: 'warn', message: 'No Tasks'});
     else{
         var teamMem
        team.forEach(element => {
            teamMem = element.teamMembers;
        });
        console.log(teamMem)
    }
    const astask = await assignedTask.find({devRef:{$in:teamMem}}).populate('devRef','name')
    .exec((e,d)=>{
        if(e) res.status(400).send({type: 'warn', message: 'No uTasks'});
        else{
            console.log(d)
        }
    })
    
} catch (error) {
    console.error(error);
    res.status(500).send({type: 'error', message: 'Error while connecting to the server!'});
   }
}