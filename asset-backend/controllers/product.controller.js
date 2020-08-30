
const product =require("../models/product.model");
exports.getproductss =(req,res,next)=>{ product.find({category:'CATA'},{_id:false})
                                              .then(prods => {res.status(200).json(prods) } )  
                                              .catch(error=>{ res.status(500).json(error)})
                                     };
exports.getproducts =(req,res,next)=>{
                                       product.find()  
                                              .then(prods => {res.status(200).json(prods) } ) 
                                              .catch(error=>{ res.status(500).json(error)})
                                     };
exports.getproduct =(req,res,next)=>{ product.find({id:req.params.id})
                                             .then(prods => {res.status(200).json(prods) } ) 
                                             .catch(error=>{ res.status(500).json(error)})
                                    };
exports.addproduct =(req,res,next)=>{ var Pro =new product(
                                                           {id         :req.body.id,
                                                            name       :req.body.name,
                                                            category   :req.body.category,
                                                            descrip    :req.body.descrip,
                                                            price      :req.body.price
                                                           });
                                        Pro.save()
                                           .then(prod=>{res.status(200).json({prod,success:true})})
                                           .catch(erorr=>{res.status(500).json({msg:erorr.message,success:false})})

                                    };
                                   
 exports.updateproduct =(req,res,next)=>{ var Pro =new product(
                                                               {      _id         :req.body._id,
                                                                      id         :req.body.id,
                                                                      name       :req.body.name,
                                                                      category   :req.body.category,
                                                                      description:req.body.description,
                                                                      price      :req.body.price
                                                               });
                                      
 product.findOneAndUpdate({_id:req.body._id},{$set:Pro})
                                            .then(prod=>{res.status(200).json({prod,success:true})})
                                            .catch(erorr=>{res.status(500).json({msg:erorr.message,success:false})})                                                  
                                         };
exports.deleteproduct =(req,res,next)=>{ 
                                          product.findOneAndRemove({_id:req.body._id})
                                          .then(prod=>{res.status(200).json({prod,success:true})})
                                          .catch(erorr=>{res.status(500).json({msg:erorr.message,success:false})})

                };