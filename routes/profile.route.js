const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Employee = require('../models/employeeModel');

module.exports = async (req, res) =>{
    try {
        const token = req.header('authorization');
        const decode = jwt.decode(token);
        Employee.findOneAndUpdate({employeeId:decode.employeeId},
            {$set: req.body},{
            runValidators:true,new:true},
            async(e,d)=>{
            if(e) console.log(e); 
            else{
                res.status(200).send({type:"success",message:"Profile Updated"});
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({type: 'error', message: 'Error while connecting to the server!'});
    }
}
