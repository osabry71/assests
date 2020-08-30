const auth =require("./authentication");
const userauthorized = require("../models/userauthorization.model");
const { nextTick } = require("process");t7

  
class Authorization{
 static addpermission(username,url,method,res,req){
 auth.checktoken(req.headers["x-auth-token"])
    .then (auth=>{ if(auth.username=="admin"){ 
                         let user = new userauthorized({ username:username, url:url, method:method });user.save()
                         .then(userdoc=>{return res.stats(200).json({ success:true,msg:"permission added successfully"}) })
                    }else{ return res.status(401).json( { success:false,  msg:"access denied" });}}) 
    .catch(err=>{return res.status(401).json({success:false, msg:"access denied",error:err }); }); //end catch                                
                                        }//end method  
 static authorized(username,method,url,req,res,next){
     userauthorized.find({$and:[{username:{$eq:username}} ,
                         {$or:[{url:url},{url:"*"}]},
                         {$or:[{method:method},{method:"*"}]} ]})
                   .then(result=>{if(result.length==0){return res.status(401).json
                                                      ({success:false,msg:"access deny"});
                                 }else{ console.log (username,method,url);
                                    next();
                                        //return res.status(200).json({success:true,msg:"isadmin" });
                                     } })
                   .catch(err=>{return res.status(401).json({ success:false,msg:"unauthorized method"});});//  end catch            	  
                     }   //end method                
                    }//end class
module.exports=Authorization;     