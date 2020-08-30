
const spareparts =require("../models/spareparts.model");

exports.getspareparts =(req,res,next)=>{
                                          
                                       spareparts.find()  
                                              .then(Spar => {res.status(200).json(Spar) } ) 
                                              .catch(error=>{ res.status(500).json(error)})
                                     };
exports.getSparepart =(req,res,next)=>{ Sparepart.find({id:req.params.id})
                                             .then(Spar => {res.status(200).json(Spar) } ) 
                                             .catch(error=>{ res.status(500).json(error)})
                                    };
exports.addSparepart =(req,res,next)=>{ var Pro =new Sparepart(
                                                           {
                                                               SP_Name      :req.body.SP_Name,
                                                               SP_life_span   :req.body.SP_life_span,
                                                               SP_Country_of_manufacture    :req.body.SP_Country_of_manufacture,
                                                               SP_Country_of_Origin     :req.body.SP_Country_of_Origin,
                                                               SP_Image    :req.body. SP_Image,
                                                               SP_Discraption     :req.body.SP_Discraption

                                                            


                                                           });
                                        Pro.save()
                                           .then(Spar=>{res.status(200).json({Spar,success:true})})
                                           .catch(erorr=>{res.status(500).json({msg:erorr.message,success:false})})

                                    };
                                   
 exports.updateSparepart =(req,res,next)=>{ var Pro =new Sparepart(
                                                               {      SP_Name      :req.body.SP_Name,
                                                                      SP_life_span   :req.body.SP_life_span,
                                                                      SP_Country_of_manufacture    :req.body.SP_Country_of_manufacture,
                                                                      SP_Country_of_Origin     :req.body.SP_Country_of_Origin,
                                                                      SP_Image    :req.body. SP_Image,
                                                                      SP_Discraption     :req.body.SP_Discraption
       
                                                               });
                                      
 Sparepart.findOneAndUpdate({_id:req.body._id},{$set:Pro})
                                            .then(Spar=>{res.status(200).json({Spar,success:true})})
                                            .catch(erorr=>{res.status(500).json({msg:erorr.message,success:false})})                                                  
                                         };
exports.deleteSparepart =(req,res,next)=>{ 
                                          Sparepart.findOneAndRemove({_id:req.body._id})
                                          .then(Spar=>{res.status(200).json({Spar,success:true})})
                                          .catch(erorr=>{res.status(500).json({msg:erorr.message,success:false})})

                };