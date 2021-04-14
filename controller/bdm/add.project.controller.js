const Project = require('../../models/projectModel');
const Employee = require('../../models/employeeModel');
module.exports = async(req, res)=>{
    const {projectId,projectTitle,projectDesc,managerId,startDate,endDate}=req.body;
    try {
        Project.create(
            {
                projectId,
                projectTitle,
                projectDesc,
                managerId,
                startDate,
                endDate
            }
            ,async(error,data)=>{
                if(error) return res.status(400).send({type:'error',message: error});
                else{
                    return res.status(200).send({type:'success',message:'Project Added'});
                }
            }
            
        )
        
    } catch (error) {
        console.error(error);
        res.status(500).send({type: 'error', message: 'something went wrong at server'});
    }
}