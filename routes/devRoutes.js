const router = require("express").Router();
const verify = require('../routes/verifyToken');


//View assigned Projects

//View assigned Project Tasks


//******************************************************************************************************* */
//********************************************** PM ROUTES ********************************************** */
//******************************************************************************************************* */

//View Employee
router.get('/emp',verify.PM, require('../routes/readRoutes').empDev);

//View assigned Projects

//Add project Task

//Update Project Task

//Delete Project Task 

//Set Project Team - Employee Info 

//Update Project Tasks % of completion

module.exports = router;
