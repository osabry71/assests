const express = require ("express");
const router =express.Router();
const authorizationController =require("../controllers/userauthorization.controller");

router.get   ("/authorization"    ,authorizationController.getauthorizations);
router.get   ("/authorization/:id",authorizationController.getauthorization);
router.post  ("/authorization"    ,authorizationController.addauthorization);
router.put   ("/authorization"    ,authorizationController.updateauthorization);
router.delete("/authorization"    ,authorizationController.deleteauthorization);


module.exports =router;