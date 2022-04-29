var express = require('express');
const router = express.Router();
var exportCtrl = require('../controller/export.controller');

router.get("/export/student" , exportCtrl.exportStudents);
module.exports = router