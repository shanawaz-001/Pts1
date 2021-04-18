const assignTask = require('../../models/assignTaskModel');

module.exports = async(req, res) =>{
    try {
        const {devRef, taskRef} = req.body;
        await assignTask.create({devRef,taskRef},
            async (err, dt)=>{
                if(err) return res.status(400).send({type:'error', message: err.message});
                else{
                    res.status(200).send({type:'success', message:'Task assigned'})
                }
            })
    } catch (error) {
        console.error(error);
        res.status(500).send({type: 'error', message: 'Error while connecting to the server!'});
    }
  
}