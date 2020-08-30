const express = require ("express");
const router =express.Router();
const assetController =require("../controllers/asset.controller");
router.get   ("/"    ,assetController.getasset);
router.get   ("/:id",assetController.getasset);
router.post  ("/"    ,assetController.addasset);
router.put   ("/"    ,assetController.updateasset);
router.delete("/"    ,assetController.deleteasset);
module.exports =router;
