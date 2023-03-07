const express=require("express");
const app= express();
app.use(express.json());
const cors =require("cors");
app.use(cors({origin:["http://localhost:3000","https://todo-list-gbtf.onrender.com/"]}));
const doEnv=require("dotenv");
doEnv.config();
require("./Database/dbConnection");//database 
const routepath=require("./routes/route");

//client request path
app.use("/home/task",routepath);

//Connecting to port
app.listen(8080,()=>{
    console.log("server is Started .....");
});