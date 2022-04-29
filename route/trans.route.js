var express = require('express');
const router = express.Router();
var transCtrl = require('../controller/transData.controller');

router.post("/students/save" , transCtrl.transData);

module.exports = router