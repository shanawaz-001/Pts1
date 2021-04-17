const Employee = require('../../models/employeeModel');
const Task = require('../../models/projectTaskModel');
const  mongoose  = require('mongoose');

module.exports = async(req, res)=>{
    const {taskDesc, priority, startDate, endDate, status, projectRef}=req.body;
    try {
        Task.create({
            taskDesc,
            priority,
            startDate,
            endDate,
            status,
            projectRef   
        },async(er,dt)=>{
            if(er) return res.status(400).send({type:'error',message: er.message});
            else{
                return res.status(200).send({type:'success',message:'Project Added'});
            }
        })
    } catch (error) {
        console.error(error);
        res.status(500).send({type: 'error', message: 'Error while connecting to the server!'});
    }
}