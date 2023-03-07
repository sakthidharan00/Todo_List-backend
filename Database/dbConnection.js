const mongoose=require("mongoose");
mongoose.connect(process.env.dataBaseUrl,()=>{
    console.log("database is Connected");
})