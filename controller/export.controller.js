var queries = require('../db/queries');
var dbConnection = require('../db/connection');
var util = require('../Util/utility');
var validationUtil = require('../Util/validation');
var Logger = require('../services/logger.service');
var auditService = require('../audit/audit.service');
var auditAction = require('../audit/auditAction');
var fastCsv = require('fast-csv');
var fs = require('fs');
const ws = fs.createWriteStream("students.csv");

const logger = new Logger('export.controller');

exports.exportStudents = async (req , res) => {
    try {
        var studentListQuery = queries.queryList.GET_INFO_LIST_QUERY;
        var result = await dbConnection.dbQuery(studentListQuery);
        logger.info("return student List" , result.rows);
        const data = JSON.parse(JSON.stringify(result.rows));
        fastCsv.write(data , {headers : true}).on("end", ()=>{
            console.log("write to students.csv successfully");
            res.download("students.csv" , function(){
                console.log("file downloaded successfully");
            })
        }).pipe(ws);
        // return res.status(200).send({data : "export data successfully"})
    } catch (err) {
        console.log("Error : " + err);
        return res.status(500).send({error : 'Failed to export students'});
    }   
 }