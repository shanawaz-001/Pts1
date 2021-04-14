const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const Emp = require('../models/employeeModel')
const router = require("express").Router();

router.post('/login', async (req, res) =>{
    const user = await User.findOne({ employeeId: req.body.employeeId});
    
    if(!user) return res.status(400).send({type : 'error', message : 'Invalid Id or password '});
    else{
        const emp = await Emp.findOne({ employeeId: user.employeeId});
        const validPass = await bcrypt.compare(req.body.password, user.passwordHash);
        if(!validPass) return res.status(400).send({type: 'error', message: 'Invalid Id or Password '});
        else{
            const token = jwt.sign({employeeId: user.employeeId, designation: emp.designation}, process.env.SECRETKEY);
            res.header('authorization', token).send({ token:token, user: emp});
            
        }
    }
})

module.exports = router;



