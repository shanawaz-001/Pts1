const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
module.exports = async (req, res,next) =>{
    try {
        const token = req.header('authorization');
        const decode = jwt.decode(token);
        User.findOne({employeeId:decode.employeeId},
            async(e,d)=>{
            if(e) console.log(e); 
            else{
                const validPass = await bcrypt.compare(req.body.passwordOld, d.passwordHash);
                if(!validPass) return res.status(400).send({isconfirm: false});
                else{
                    res.send({isconfirm: true})
                   next();
                }
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({type: 'error', message: 'Error while connecting to the server!'});
    }
}
