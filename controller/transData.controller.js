var queries = require('../db/queries');
var dbConnection = require('../db/connection');
var util = require('../Util/utility');
var validationUtil = require('../Util/validation');
var Logger = require('../services/logger.service');
var auditService = require('../audit/audit.service');
var auditAction = require('../audit/auditAction');
var APIError = require('../error/api.error');
var errorStatus = require('../error/error.status');
var errorType = require('../error/error.type');
var bcrypt = require('bcryptjs');

const logger = new Logger('transData.controller');

exports.transData = async(req , res)=> {
    try {

        var fullName = req.body.fullName;
        var user_number = req.body.user_number;
        var address = req.body.address;
        var grade = req.body.grade;
        var major = req.body.major;
        var courser1 = req.body.courser1;
        var courser2 = req.body.courser2;
        var courser3 = req.body.courser3;
        var courser4 = req.body.courser4;
        var courser5 = req.body.courser5;
        var courser6 = req.body.courser6;
        var courser7 = req.body.courser7;
        var courser8 = req.body.courser8;

        if(!fullName || !user_number || !address || !grade || !major || !courser1 || !courser2 || !courser3 ||!courser4 || !courser5 || !courser6){
            return res.status(500).send({ error: 'fullName , user_number , address , grade, major , courser1 ,courser2 , courser3 ,courser4 , courser5 , courser6 are required , can not empty' })
        }

        values =[fullName , user_number , address , grade, major , courser1 ,courser2 , courser3 ,courser4 , courser5 , courser6, courser7 ,courser8];
        var saveStudentQuery = queries.queryList.SAVE_STUDENT_QUERY;
        await dbConnection.dbQuery(saveStudentQuery , values);
        return res.status(201).send("Successfully adding new Student ");
        
    } catch (err) {
        console.log("Error : " + err);
        return res.status(500).send({error : 'Failed to add new student'});
    }


}

exports.updateData = async(req , res)=> {
    try {

        var fullName = req.body.fullName;
        var user_number = req.body.user_number;
        var address = req.body.address;
        var grade = req.body.grade;
        var major = req.body.major;
        var courser1 = req.body.courser1;
        var courser2 = req.body.courser2;
        var courser3 = req.body.courser3;
        var courser4 = req.body.courser4;
        var courser5 = req.body.courser5;
        var courser6 = req.body.courser6;
        var courser7 = req.body.courser7;
        var courser8 = req.body.courser8;

        if(!fullName || !user_number || !address || !grade || !major || !courser1 || !courser2 || !courser3 ||!courser4 || !courser5 || !courser6){
            return res.status(500).send({ error: 'fullName , user_number , address , grade, major , courser1 ,courser2 , courser3 ,courser4 , courser5 , courser6 are required , can not empty' })
        }

        values =[fullName , user_number , address , grade, major , courser1 ,courser2 , courser3 ,courser4 , courser5 , courser6, courser7 ,courser8];
        var saveStudentQuery = queries.queryList.UPDATE_STUDENT_QUERY;
        await dbConnection.dbQuery(saveStudentQuery , values);
        return res.status(201).send("Successfully update Student ");
        
    } catch (err) {
        console.log("Error : " + err);
        return res.status(500).send({error : 'Failed to update student'});
    }


}


