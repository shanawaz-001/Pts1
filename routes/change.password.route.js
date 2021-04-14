const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
module.exports = async (req, res) =>{
    try {
        const token = req.header('authorization');
        const decode = jwt.decode(token);
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(req.body.passwordNew, salt);
        User.findOneAndUpdate(
            {employeeId:decode.employeeId},
            {passwordHash},{
            runValidators:true,new:true},
            async(e,d)=>{
            if(e) return res.status(400).send({type: 'error', message: e.message});
            else{
            res.status(200).send({
                type: 'success',
                message: 'password changed'
            }); 
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({type: 'error', message: 'something went wrong at server'});
    }
}
