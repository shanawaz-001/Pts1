const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
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
        const verified = jwt.verify(token, process.env.SECRETKEY);
        if(decode.designation ==process.env.HR ){
            req.user = verified;
            next();
        }
        else return res.status(401).send({ type:'error',message: 'Access Denied'});
            
    } catch (error) {
        console.log(error);
        res.status(400).send({type:'error', message:'Invalid Token'});
    }
};

//--------------------------BDM Verification--------------------------------------------------------------
module.exports.BDM = function (req,res,next){
    const token = req.header('authorization');
    if(!token) return res.status(401).send({ type:'error',message: 'Access Denied'});
    try {
        const decode = jwt.decode(token);
        const verified = jwt.verify(token, process.env.SECRETKEY);
        if(decode.designation ==process.env.BDM ){
            req.user = verified;
            next();
        }
        else return res.status(401).send({ type:'error',message: 'Access Denied'});
            
    } catch (error) {
        console.log(error);
        res.status(400).send({type:'error', message:'Invalid Token'});
    }
};
//--------------------------DEV Verification--------------------------------------------------------------
module.exports.DEV = function (req,res,next){
    const token = req.header('authorization');
    if(!token) return res.status(401).send({ type:'error',message: 'Access Denied'});
    try {
        const decode = jwt.decode(token);
        const verified = jwt.verify(token, process.env.SECRETKEY);
        if(decode.designation ==process.env.DEV ){
            req.user = verified;
            next();
        }
        else return res.status(401).send({ type:'error',message: 'Access Denied'});
            
    } catch (error) {
        console.log(error);
        res.status(400).send({type:'error', message:'Invalid Token'});
    }
};