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
router.post('/pm/task/update',verify.PM, require('../controller/pm/update.task.controller'));
//Delete Project Task 

//Set Project Team - Employee Info 
router.post('/pm/team/add',verify.PM,require('../controller/pm/add.team.controller'));
//Update Project Tasks % of completion



//******************************************************************************************************* */
//********************************************** TL ROUTES ********************************************** */
//******************************************************************************************************* */


//get assigned projects
router.get('/tl/projects',verify.TL,require('../controller/tl/get.projects.controller'));
//get project tasks
router.get('/tl/project/tasks',verify.TL,require('../controller/tl/get.task.controller'));
//get assigned team
router.get('/tl/project/team',verify.TL, require('../controller/tl/get.team.controller'));
//get team members task assigned
router.get('/tl/project/team/assigned',verify.TL, require('../controller/tl/get.assignedMem.controller'));
//get team members task unassigned
router.get('/tl/project/team/unassigned',verify.TL, require('../controller/tl/get.unassignedMem.controller'));
//assign task to team member
router.post('/tl/project/team/assignTask',verify.TL,require('../controller/tl/assign.task.controller'));





module.exports = router;