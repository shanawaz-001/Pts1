const router = require("express").Router();
const jwt = require('jsonwebtoken');
const verify = require('../routes/verifyToken');
//View Employee

//View Projects
router.get('/project',verify.BDM, require('../routes/readRoutes').projects);
//Add project
router.post('/project/add', verify.BDM, require('../controller/bdm/add.project.controller'));
//Update Project
router.post('/project/update', verify.BDM, require('../controller/bdm/update.project.controller'));
// //Delete Project
router.post('/project/remove', verify.BDM, require('../controller/bdm/remove.project.controller'));
// //Set Project Manager
// router.post('/bdm/project/add', verify.BDM, require('../controller/bdm/add.project.controller'))
//Track Project Tasks
module.exports = router;


