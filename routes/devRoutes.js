const router = require("express").Router();
const verify = require('../routes/verifyToken');

//confirmation
router.get('/dev',require('../controller/dev/get.confirmation.controller'));

//View assigned Projects
router.get('/dev/projects',require('../controller/dev/get.assignedProjects.controller'));
//View assigned Project Tasks
router.get('/dev/tasks',require('../controller/dev/get.assignedTasks.controller'));

//******************************************************************************************************* */
//********************************************** PM ROUTES ********************************************** */
//******************************************************************************************************* */

//View Employee
router.get('/pm/emp',verify.PM, require('../routes/readRoutes').empActive);

//View assigned Projects
router.get('/pm/projects',verify.PM, require('../controller/pm/get.assignedProjects.controller'));
//View Project Tasks
router.get('/pm/tasks',verify.PM, require('../routes/readRoutes').projectTasks);
//Add project Task
router.post('/pm/task/add',verify.PM, require('../controller/pm/add.task.controller'));
//Update Project Task
router.post('/pm/task/update',verify.PM, require('../controller/pm/update.task.controller'));
//Delete Project Task 
router.post('/pm/task/remove',verify.PM, require('../controller/pm/remove.task.controller'));

//Set Project Team - Employee Info 
router.post('/pm/team/add',verify.PM,require('../controller/pm/add.team.controller'));
//View Project Team
router.get('/pm/teams',verify.PM, require('../routes/readRoutes').projectTeams);
//update Project Team
router.post('/pm/team/update',verify.PM,require('../controller/pm/update.team.controller'));
//remove Project Team


//Update Project Tasks % of completion



//******************************************************************************************************* */
//********************************************** TL ROUTES ********************************************** */
//******************************************************************************************************* */


//get assigned projects
router.get('/tl/projects',verify.TL,require('../controller/tl/get.projects.controller'));
//get project tasks
router.get('/tl/project/tasks',verify.TL,require('../routes/readRoutes').projectTasks);
//get assigned team
router.get('/tl/project/team',verify.TL, require('../controller/tl/get.team.controller'));
//get team members task assigned
router.get('/tl/project/team/assigned',verify.TL, require('../controller/tl/get.assignedMem.controller'));
//get team members task unassigned
router.get('/tl/project/team/unassigned',verify.TL, require('../controller/tl/get.unassignedMem.controller'));
//assign task to team member
router.post('/tl/project/team/assignTask',verify.TL,require('../controller/tl/assign.task.controller'));
//Unassign task to team member
router.post('/tl/project/team/unassignTask',verify.TL,require('../controller/tl/unassign.task.controller'));

//update % of team work completion






module.exports = router;