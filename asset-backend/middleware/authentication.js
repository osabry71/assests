


const jwt =require("jsonwebtoken");

class Authentication{
static createtoken(TokenPayloadobject){
 return new Promise((resolve,reject)=>{
 try{const token =jwt.sign(TokenPayloadobject,process.env.jwt_KEY,{expiresIn:"3h"});  +
                  resolve(token);}
catch(ex){reject}
                                                                                       })
                                                  }
static checktoken(token){
               return new Promise((resolve,reject)=>{
 try{ const decodetoken= jwt.verify(token,process.env.jwt_KEY);
        resolve(decodetoken); 
     }catch(err){ reject(err); } }) 
    }                                    
    }
module.exports =Authentication;