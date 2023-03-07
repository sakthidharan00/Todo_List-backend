const mongoose=require("mongoose");

const schema= new mongoose.Schema({
    task:{
        type:String,
        required:true,
    },
    isComplete:Boolean
});

const dbCollection= mongoose.model("task",schema);
module.exports=dbCollection;