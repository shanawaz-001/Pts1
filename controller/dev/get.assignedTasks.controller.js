const jwt = require('jsonwebtoken');
const Task = require('../../models/assignTaskModel');
module.exports = async(req,res)=>{
    const token = req.header('authorization');
    try {
        const decode = jwt.decode(token);
        const task = await Task.find({devRef: decode.id}).populate('taskRef').exec(async(e,d)=>{
            if(e) return res.status(401).send({type: 'error', message: e.message})
            if(d.length>0) return res.send(d)
            if(d.length===0) return res.send({message: 'No Tasks assigned'});
        });  
    } catch (error) {
        console.log(error);
        res.status(400).send({type:'error', message:`can't connect to the server`});
    }
}