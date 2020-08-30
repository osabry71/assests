const bcryptjs = require("bcryptjs");
class EncryptPass{
    static CreateCipherPass(plainPass){
        return new Promise((resolve,reject)=>{
            bcryptjs.hash(plainPass,10).then((hashPass)=>{
                resolve(hashPass);} ).catch(err=>{
                    reject(err);
                })  }) }
static comparepasswords(encpass,plainPass){
    return new Promise((resolve,reject)=>{ bcryptjs.compare(plainPass,encpass)
                                     .then(matched=>{ if(!matched)  return reject(true);
                                                     else  return resolve (false); })
                                     .catch(err=>{return reject(err);})
    })
}


}
module.exports=EncryptPass;