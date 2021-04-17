const Emp = require('../models/employeeModel')
const Project = require('../models/projectModel')
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

