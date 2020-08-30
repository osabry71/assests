const express = require ("express");
const router =express.Router();

const departmentController =require("../controllers/department.controller");

router.get   ("/"    ,departmentController.getdepartments);
router.get   ("/:id",departmentController.getdepartment);
router.post  ("/"    ,departmentController.adddepartment);
router.put   ("/"    ,departmentController.updatedepartment);
router.delete("/"    ,departmentController.deletedepartment);

module.exports =router;