const asset2 = require("../models/asset.model");

exports.getasset = (req, res, next) => {
   asset2.find()
      .then(asset2 => {
         res.status(200).json(asset2)
      })
      .catch(error => {
         res.status(500).json(error)
      })
};

exports.getasset = (req, res, next) => {
   asset2.find({
         id: req.params.id
      })
      .then(asset2 => {
         res.status(200).json(asset2)
      })
      .catch(error => {
         res.status(500).json(error)
      })
};

exports.addasset = (req, res, next) => {
   var Asset2 = new asset2({
      ASName: req.body.ASName,
      ASlocation: req.body.ASlocation,
      ASlifespan: req.body.ASlifespan,
      ASCountryofmanufacture: req.body.ASCountryofmanufacture,
      AScontractnumber: req.body.AScontractnumber,
      ASCountryofOrigin: req.body.ASCountryofOrigin
   });

   Asset2.save()
      .then(Asset2 => {
         res.status(200).json({
            Asset2,
            success: true
         })
      })
      .catch(erorr => {
         res.status(500).json({
            msg: erorr.message,
            success: false
         })
      })

};
//console.log("EditAsset.....")

exports.updateasset = (req, res, next) => {
   console.log("EditAsset.....")
   var Asset2 = new asset2({
      _id: req.body._id,
      ASName: req.body.ASName,
      ASlocation: req.body.ASlocation,
      ASlifespan: req.body.ASlifespan,
      ASCountryofmanufacture: req.body.ASCountryofmanufacture,
      AScontractnumber: req.body.AScontractnumber,
      ASCountryofOrigin: req.body.ASCountryofOrigin
   });
   asset2.findOneAndUpdate({
         _id: req.body._id
      }, {
         $set: Asset2
      })
      .then(Asset2 => {
         res.status(200).json({
            Asset2,
             success: true
         })
         console.log("Asset data =" + Asset2);
      })
      .catch(erorr => {
         res.status(500).json({
            msg: erorr.message,
            success: false

         })
      })

   };

exports.deleteasset = (req, res, next) => {
   asset2.findOneAndRemove({
//         _id: req.body._id
           _id: req.headers["id"]
      })
      .then(DelOK => {
         res.status(200).json({
            DelOK,
            success: true
         })
      })
      .catch(erorr => {
         res.status(500).json({
            msg: erorr.message,
            success: false
         })
      })

};