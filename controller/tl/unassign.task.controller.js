const assignTask = require('../../models/assignTaskModel');

module.exports = async(req, res) =>{
    try {
        const {assignTask_id} = req.body;
        await assignTask.findByIdAndDelete(assignTask_id,
            async (err, dt)=>{
                if(err) return res.status(400).send({type:'error', message: err.message});
                else{
                    res.status(200).send({type:'success', message:'Task unassigned'})
                }
            })
    } catch (error) {
        console.error(error);
        res.status(500).send({type: 'error', message: 'Error while connecting to the server!'});
    }
  
}