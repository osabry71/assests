//Declaration
const express = require("express");
const mongo = require("mongoose");
const server= express();
const product =require("./routes/product.routes"); 
const spareparts =require("./routes/spareparts.routes");
const user =require("./routes/user.routes");
const employee =require("./routes/employee.routes");
const department =require("./routes/department.routes");
const asset =require("./routes/asset.routes");
const bodyParser =require("body-Parser");
const auth = require("./middleware/auth");
server.use((req,res,next)=>{
      res.setHeader("access-control-allow-origin","*");
      res.setHeader( "Access-Control-Allow-Headers", "origin,content-type,accept,autharization,username,password,x-auth-token,id,new_name,new_category,new_price,prod,emps,employee,_id,department");
      res.setHeader("Access-Control-Allow-Methods","GET,POST,PUT,DELETE,OPTIONS" );
  if(! (req.url=="/users/login/" || (req.url=="/users/user" && req.method=="POST"))) {
    if(req.headers["x-auth-token"]!=undefined) {
             auth.checktoken(req.headers["x-auth-token"])
             .then(result=>{
         
               }).catch(ex=>{
                  res.status(200).json({success:false,
                        msg:"invalidg authentication"})
                  return;  
             })
             
            }else{
                  res.status(200).json({success:false,
                        msg:"authentication faild, ples send api token(x-auth-token)"})
                  return;
            }

        }
        
        
next();


});







server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:true}));
//conect to mongo

mongo
       .connect("mongodb://localhost:27017/ecomm")
       .then(function(){console.log("connected to mongoDB Successfully")})
       .catch(function(){console.log("can't connect to mongoDB")});
mongo  .set('useNewUrlParser', true)
       .set('useFindAndModify', false)
       .set('useCreateIndex', true)
       .set('useUnifiedTopology', true);
server.use("/asset",asset);
server.use("/spareparts",spareparts);
server.use("/product",product);
server.use("/users",user);
server.use("/employee",employee);
server.use("/department",department);
server.listen(3007,"127.0.0.1",function(){
                 console.log("Server is running on http://localhost:3007")
                                           
                                         }
             )