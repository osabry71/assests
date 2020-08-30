
const user =require("../models/user.model");
const hashPass = require("../middleware/encryptPass");
const auth = require("../middleware/auth");
const { Console } = require("console");
exports.getusers =(req,res,next)=>{
                                       user.find({},{})  
                                              .then(userData => {res.status(200).json(userData) } ) 
                                              .catch(error=>{ res.status(500).json(error)})
                                     };
exports.getuser =(req,res,next)=>{ user.find({id:req.params.id})
                                             .then(userData => {res.status(200).json(userData) } ) 
                                             .catch(error=>{ res.status(500).json(error)})
                                    };
exports.adduser =(req,res,next)=>{
       console.log(req.body.password)
 hashPass.CreateCipherPass(req.body.password)
               .then(encpass=>{
                  
                     var newuser =new user({ username:req.body.username,
                            name    :req.body.name,
                            password:encpass,
                            email   :req.body.email,
                            phone   :req.body.phone,
                            gender  :req.body.gender
                          });
                   newuser.save().then(userData=>
                     {
                            auth.createtoken({emaill:userData.email,username:userData.username})
                                .then(token=>{   res.status(200).json({success:true,token:token}) })
                                .catch(()=>{     res.status(200).json({success:true,msg:"user created but must be signin"})  })
                           
                     })
                          .catch(erorr=>{res.status(200).json({msg:erorr.message,success:false})})


               })
               .catch(erorr=>{res.status(500).json({msg:erorr.message,success:false})})

        
                
                            };
 exports.updateuser =(req,res,next)=>{ var upduser =new user(
                                                               {      _id         :req.body._id,
                                                                      username:req.body.username,
                                                                      name    :req.body.name,
                                                                      email   :req.body.email,
                                                                      phone   :req.body.phone,
                                                                      gender  :req.body.gender
                                                               });
                                      console.log (upduser.user );                                          user.findOneAndUpdate({_id:req.body._id},{$set:upduser})
                                            .then(userData=>{res.status(200).json({userData,success:true})})
                                            .catch(erorr=>{res.status(500).json({msg:erorr.message,success:false})})                                                  
                                         };
exports.deleteuser =(req,res,next)=>{ 
                                          user.findOneAndRemove({_id:req.body._id})
                                          .then(prod=>{res.status(200).json({userData,success:true})})
                                          .catch(erorr=>{res.status(500).json({msg:erorr.message,success:false})})

                };
exports.isadmin =(req,res,next)=>{
       if(req.headers["x-auth-token"]!=undefined) {
              auth.checktoken(req.headers["x-auth-token"])
              .then(result=>{
          
if(result.username=="admin"){
       res.status(200).json({success:true,
       isadmin:true})}else{
              res.status(200).json({success:true,
                     isadmin:false  })
       }


                }).catch(ex=>{
                   res.status(500).json({success:false,
                         msg:"invalidg authentication"})
                   return;  
              })
       }else{
              res.status(500).json({success:false,
                     msg:"invalidg authentication"})
               return;   
       }
 }

 exports.login =(req,res,next)=>{ 
       
console.log(req.headers["username"])
console.log(req.headers["password"])
user.findOne({username:req.headers["username"]})
 .then(userData => { console.log(userData,userData.role)
 if(userData!=null){   hashPass.comparepasswords(userData.password,req.headers["password"])  
     .then(result=>{  auth.createtoken({emaill:userData.email,username:userData.username})
                   .then(token=>{res.status(200).json({success:true,token:token,userrole:userData.role}) })
                   .catch(()=>{res.status(200).json({success:true,msg:"please re-signin"})  }) })
               .catch(result=>{ res.status(200).json({success:false,msg:"username/password incorrect"}) }) }
  else
       res.status(200).json({success:false,msg:"username/password incorrect"}) } ) 
              .catch(error=>{ res.status(500).json({success:false,msg:"username not registered"})})
                                };