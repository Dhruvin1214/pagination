var express = require('express');
var router = express.Router();
var usercontroller = require('../controller/usercontroller');

router.post('/',usercontroller.add_data);
router.get('/',usercontroller.view_data);


module.exports = router;
