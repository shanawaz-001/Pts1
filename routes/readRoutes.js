const Emp = require('../models/employeeModel')
const Project = require('../models/projectModel')
const Task = require('../models/projectTaskModel');
const Team = require('../models/projectTeamModel');
//all employees---------------------------------------
module.exports.empActive = async(req, res)=>{
    await Emp.find({status: process.env.ACTIVE}).sort('employeeId')
    .then(data => res.send(data))
    .catch(error => console.error(error))
}


//all employees Inactive------------------------------
module.exports.empInactive = async(req, res)=>{
    await Emp.find({status: process.env.INACTIVE}).sort('employeeId')
    .then(data => res.send(data))
    .catch(error => console.error(error))
}


//All Projects----------------------------------------

module.exports.projects = async(req, res) =>{
    await Project.find().sort('projectTitle').populate('managerId','name')
    .then(data => res.send(data))
    .catch(error => console.error(error))
}


//All developers----------------------------------------
module.exports.empDev = async(req, res)=>{
    await Emp.find({designation: process.env.DEV}).sort('employeeId')
    .then(data => res.send(data))
    .catch(error => console.error(error))
}
//Project Tasks-------------------------------------------
module.exports.projectTasks = async(req, res)=>{
    await Task.find({projectRef: req.body.projectRef})
    .then(data => res.send(data))
    .catch(error => console.error(error))
}
//View Teams-----------------------------------------------
module.exports.projectTeams = async(req, res)=>{
    await Team.find({projectRef: req.body.projectRef})
    .then(data => res.send(data))
    .catch(error => console.error(error))
}