var express = require('express');
var db = require('../models/index');
var Sequelize = require('sequelize');

/**
 * @swagger
 * tags:
 *   name: employee
 *   description: EPMPLOYEE SERVICES API List
 */
var router = express.Router();

//------------------- GET THE EMPLOYEES ------------------------

/**
 * @swagger
 *  /v1.0/employee/get/employee:
 *    get:
 *      summary: get the all employees 
 *      tags: [employee]
 *      produces:
 *      - application/json
 *      responses:
 *        "200":
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 */
router.get('/get/employee', async function (req, res, next) {
try {
    const result=  await db.employee.findAll({
        where: {
            isdel:'N'
        },
        include : [{model:db.employeeAddress}]
    });
    if(result)
        return res.status(200).json({result: true, data:result, message:"Succesfully fetched .!!"});
    else
       return res.status(8001).json({result: false, data:null, message:"Result not found..!!"});

} catch (error) {
    res.status(500).json({result:false,  errMesage:error.message})
}
}); 

//----------- UPDATE THE EMPLOYEE DATA --------------------
/**
 * @swagger
 *  /v1.0/employee/put/employee:
 *    put:
 *      summary: update th emp 
 *      tags: [employee]
 *      produces:
 *      - application/json
 *      parameters:
 *        - in: query
 *          name: emp_UUID
 *          required: true
 *        - in: query
 *          name: emp_fname
 *          required: false
 *        - in: query
 *          name: emp_lname
 *          required: false
 *        - in: query
 *          name: photo_url
 *      responses:
 *        "8002":
 *          description: DIfficulties while updating ..!!
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 */
 router.put('/put/employee',async (req,res) => {
	const reqData = req?.query
    const queryParams = {}

    if(!reqData?.emp_UUID){
        res.status(400).json({result:false, message:"REQUIRED PARAMS {emp_UUID}"})    
    }
    if(reqData?.emp_fname){
        queryParams.emp_fname = reqData?.emp_fname
    }
    if(reqData?.emp_lname){
        queryParams.emp_lname = reqData?.emp_lname
    }
    if(reqData?.photo_url){
        queryParams.photo_url = reqData?.photo_url
    }
    try {
        const result = await db.employee.update(queryParams,{
            where :{emp_UUID :reqData?.emp_UUID}
        })
        if(result)
            res.status(200).json({result:true, data:"updated succesdully .!!"})
        else    
            res.status(8002).json({result:false, data:"DIfficulties while updating ..!!"})
    } catch (error) {
        res.status(500).json({result:false, errMesage:error?.message})
    }
 })

 
//----------- DELETE THE EMPLOYEE  --------------------
/**
 * @swagger
 *  /v1.0/employee/delete/employee:
 *    delete:
 *      summary: delte the emp 
 *      tags: [employee]
 *      produces:
 *      - application/json
 *      parameters:
 *        - in: query
 *          name: emp_UUID
 *          required: true
 *      responses:
 *        "8002":
 *          description: DIfficulties while deleting ..!!
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 */
router.delete('/delete/employee',async (req,res) => {
	const reqData = req?.query

    if(!reqData?.emp_UUID){
        res.status(400).json({result:false, message:"REQUIRED PARAMS {emp_UUID}"})    
    }
    try {
        const result = await db.employee.update({isdel:'Y'},{
            where :{emp_UUID :reqData?.emp_UUID}
        })
        if(result)
            res.status(200).json({result:true, data:"deleted succesdully .!!"})
        else    
            res.status(8002).json({result:false, data:"DIfficulties while deleting ..!!"})
    } catch (error) {
        res.status(500).json({result:false, errMesage:error?.message})
    }
 })
module.exports = router;