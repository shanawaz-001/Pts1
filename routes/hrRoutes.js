const router = require("express").Router();

const jwt = require('jsonwebtoken');

const verify = require('../routes/verifyToken');

//view Employee-----------
router.get('/emp',verify.HR, require('../routes/readRoutes').empActive);
router.get('/emp/inactive',verify.HR, require('../routes/readRoutes').empInactive);
//add Employee------------
router.post('/emp/add',verify.HR, require('../controller/hr/add.emp.controller'));
//update Employee-----------
router.post('/emp/update',verify.HR, require('../controller/hr/update.emp.controller'));
//delete Employe------------
router.post('/emp/remove',verify.HR, require('../controller/hr/remove.emp.controller'));
//active Employee--------
router.post('/emp/active',verify.HR, require('../controller/hr/active.emp.controller'));
module.exports = router;