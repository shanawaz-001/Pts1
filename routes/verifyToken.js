const jwt = require('jsonwebtoken');
//Auth verification------------------------------------------------------------------------------------
module.exports = function (req,res,next){
    const token = req.header('authorization');
    if(!token) return res.status(401).send({ type:'error',message: 'Access Denied'});
    try {
        const verified = jwt.verify(token, process.env.SECRETKEY);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).send({type:'error', message:'Invalid Token'});
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