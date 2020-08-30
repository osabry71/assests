const express = require ("express");
const router =express.Router();
const employeeController =require("../controllers/employee.controller");
router.get   ("/"    ,employeeController.getemployee);
router.get   ("/:_id" ,employeeController.getemployee);
router.post  ("/"    ,employeeController.addemployee);
router.put   ("/"    ,employeeController.updateemployee);
router.delete("/"    ,employeeController.deleteemployee);
module.exports =router;