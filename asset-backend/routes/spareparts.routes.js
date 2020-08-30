const express = require ("express");
const router =express.Router();

const Sparepartscontroller = require("../controllers/Spareparts.controller");
router.get   ("/spareparts"    ,Sparepartscontroller.getspareparts);
router.get   ("/spareparts/:id",Sparepartscontroller.getSparepart);
router.post  ("/spareparts"    ,Sparepartscontroller.addSparepart);
router.put   ("/spareparts"    ,Sparepartscontroller.updateSparepart);
router.delete("/spareparts"    ,Sparepartscontroller.deleteSparepart);


module.exports =router;