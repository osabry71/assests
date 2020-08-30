const express = require ("express");
const router =express.Router();

const userController =require("../controllers/user.controller");

router.get   ("/user"    ,userController.getusers);
router.get   ("/user/:id",userController.getuser);
router.get   ("/login"   ,userController.login);
router.get   ("/isadmin"   ,userController.isadmin);

router.post  ("/user"    ,userController.adduser);
router.put   ("/user"    ,userController.updateuser);
router.delete("/user"    ,userController.deleteuser);


module.exports =router;