const Task = require('../../models/projectTaskModel');
module.exports = async(req, res)=>{
    try {
        Task.findByIdAndDelete(req.body.id,async(er,dt)=>{
            if(er) return res.status(400).send({type:'error',message: er.message});
            else{
                return res.status(200).send({type:'success',message:'Task Deleted'});
            }
        })
    } catch (error) {
        console.error(error);
        res.status(500).send({type: 'error', message: 'Error while connecting to the server!'});
    }
}