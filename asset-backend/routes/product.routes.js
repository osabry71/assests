const express = require ("express");
const router =express.Router();

const productController =require("../controllers/product.controller");
router.get   ("/products"   ,productController.getproductss);
router.get   ("/product"    ,productController.getproducts);
router.get   ("/product/:id",productController.getproduct);
router.post  ("/product"    ,productController.addproduct);
router.put   ("/product"    ,productController.updateproduct);
router.delete("/product"    ,productController.deleteproduct);


module.exports =router;