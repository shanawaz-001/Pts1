const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const Project = require('../models/projectModel');
const Team = require('../models/projectTeamModel');
//Login verification------------------------------------------------------------------------------------
module.exports.verifyLogin = async(req,res,next)=>{
    const token = req.header('authorization');
    const decode = jwt.decode(token);
    if(!token) return res.status(401).send({ type:'error',message: 'Access Denied'});
    try {
        const verified = jwt.verify(token, process.env.SECRETKEY);
        if(!verified) return res.status(401).send({ type:'error',message: 'Token Invalid'});
        const user = await User.findOne({ employeeId: decode.employeeId});
        const decodePass = decode.password;
        const userPass = user.passwordHash;  
        if(decodePass!=userPass){
            res.send({isLogin:false});
        } 
        else{
            res.send({isLogin:true});
            next(); 
        }
      
    } catch (error) {
        res.status(400).send({isLogin:false});
    }
};

//-------------------------------verify Token-----------------------------------------------------------
module.exports.verify = async(req,res,next)=>{
    const token = req.header('authorization');
    const decode = jwt.decode(token);
    if(!token) return res.status(401).send({ type:'error',message: 'Access Denied'});
    try {
        const verified = jwt.verify(token, process.env.SECRETKEY);
        if(!verified) return res.status(401).send({ type:'error',message: 'Token Invalid'});
        const user = await User.findOne({ employeeId: decode.employeeId});
        const decodePass = decode.password;
        const userPass = user.passwordHash;  
        if(decodePass!=userPass){
            res.status(400).send({type:'error', message:'Please Login token is Invalid'});
        } 
        else{
            next(); 
        }
      
    } catch (error) {
        res.status(400).send({type:'error', message:'Please Login token is Invalid'});
    }
};

//--------------------------HR Verification--------------------------------------------------------------
module.exports.HR = function (req,res,next){
    const token = req.header('authorization');
    if(!token) return res.status(401).send({ type:'error',message: 'Access Denied'});
    try {
        const decode = jwt.decode(token);
        if(decode.designation ==process.env.HR ){
            next();
        }
        else return res.status(401).send({ type:'error',message: 'Access Denied'});
            
    } catch (error) {
        console.log(error);
        res.status(400).send({type:'error', message:`can't connect to the server`});
    }
};

//--------------------------BDM Verification--------------------------------------------------------------
module.exports.BDM = function (req,res,next){
    const token = req.header('authorization');
    if(!token) return res.status(401).send({ type:'error',message: 'Access Denied'});
    try {
        const decode = jwt.decode(token);
        if(decode.designation ==process.env.BDM ){
            next();
        }
        else return res.status(401).send({ type:'error',message: 'Access Denied'});
            
    } catch (error) {
        console.log(error);
        res.status(400).send({type:'error', message:`can't connect to the server`});
    }
};

//--------------------------PM Verification---------------------------------------------------------------
module.exports.PM = async (req,res,next)=>{
    const token = req.header('authorization');
    if(!token) return res.status(401).send({ type:'error',message: 'Access Denied'});
    try {
        const decode = jwt.decode(token);
        const isManager = await Project.find({managerId: decode.id});
            
        if(!isManager) res.status(401).send({type:'error',message: 'Access Denied'})
            
        else next();
        
            
    } catch (error) {
        console.log(error);
        res.status(400).send({type:'error', message:`can't connect to the server`});
    }
};

//--------------------------TL Verification---------------------------------------------------------------
module.exports.TL = async (req,res,next)=>{
    const token = req.header('authorization');
    if(!token) return res.status(401).send({ type:'error',message: 'Access Denied'});
    try {
        const decode = jwt.decode(token);
        const isTL = await Team.find({teamLeader: decode.id});
            
        if(!isTL) res.status(401).send({type:'error',message: 'Access Denied'})
            
        else next();
        
            
    } catch (error) {
        console.log(error);
        res.status(400).send({type:'error', message:`can't connect to the server`});
    }
};

//--------------------------DEV Verification--------------------------------------------------------------
module.exports.DEV = function (req,res,next){
    const token = req.header('authorization');
    if(!token) return res.status(401).send({ type:'error',message: 'Access Denied'});
    try {
        const decode = jwt.decode(token);
        if(decode.designation ==process.env.DEV ){
            next();
        }
        else return res.status(401).send({ type:'error',message: 'Access Denied'});
            
    } catch (error) {
        console.log(error);
        res.status(400).send({type:'error', message:`can't connect to the server`});
    }
};