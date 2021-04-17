const router = require("express").Router();
const verify = require('../routes/verifyToken');


//View assigned Projects

//View assigned Project Tasks


//******************************************************************************************************* */
//********************************************** PM ROUTES ********************************************** */
//******************************************************************************************************* */

//View Employee
router.get('/pm/emp',verify.PM, require('../routes/readRoutes').empDev);

//View assigned Projects
router.get('/pm/projects',verify.PM, require('../controller/pm/get.assignedProjects.controller'));
//Add project Task
router.post('/pm/task/add',verify.PM, require('../controller/pm/add.task.controller'));
//Update Project Task

//Delete Project Task 

//Set Project Team - Employee Info 
router.post('/pm/team/add',verify.PM,require('../controller/pm/add.team.controller'));
//Update Project Tasks % of completion



//******************************************************************************************************* */
//********************************************** TL ROUTES ********************************************** */
//******************************************************************************************************* */

router.get('/tl/tasks',verify.TL,require('../controller/tl/assign.task.controller'));
router.get('/tl/projects',verify.TL,require('../controller/tl/get.assigned.projects'));
router.get('/tl/project/tasks',verify.TL,require('../controller/tl/get.project.task'));




module.exports = router;