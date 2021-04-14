const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Project = require('../../models/projectModel');
const User = require('../../models/userModel');
module.exports = async (req, res) =>{
    try {
        const token = req.header('authorization');
        const decode = jwt.decode(token);
        User.findOne({employeeId:decode.employeeId},
            async(e,d)=>{
            if(e) console.log(e); 
            else{
                const validPass = await bcrypt.compare(req.body.password, d.passwordHash);
                if(!validPass) return res.status(400).send({type:'error', message:'Incorrect Password'});
                else{
                    Project.findOneAndDelete(
                        {projectId:req.body.projectId},
                        async(err,data)=>{
                        if (err) console.log(err);
                            res.status(200).send({type: 'success', message: 'project removed:' + req.body.projectId });
                        }
                )}
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({type: 'error', message: 'Error while connecting to the server!'});
    }
}
