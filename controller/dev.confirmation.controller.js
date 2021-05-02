const jwt = require('jsonwebtoken');
const Team = require('../models/projectTeamModel');
const Project = require('../models/projectModel');
module.exports = async(req,res)=>{
    const token = req.header('authorization');
    try {
        const decode = jwt.decode(token);
        const isManager = await Project.find({managerId: decode.id});
        const isTL = await Team.find({teamLeader: decode.id});
        if(isManager.length>0 && isTL.length>0) return res.status(200).send({isManager:true, isTL:true});
        if(isManager.length>0 && isTL.length===0) return res.status(200).send({isManager:true, isTL:false});
        if(isManager.length===0 && isTL.length>0) return res.status(200).send({isManager:false, isTL:true});
        if(isTL.length===0 && isManager.length===0) return res.status(200).send({isManager:false, isTL:false});
    } catch (error) {
        console.log(error);
        res.status(400).send({type:'error', message:`can't connect to the server`});
    }
}