const express=require("express");
const route=express.Router();
const database=require("../Database/schema");


//sending enitre task in database
route.get("/send",(req,res)=>{
    database.find((err,doc)=>{
        if (err){console.log(err.message);}
        res.json(doc)
    })
});

// adding new task in database
route.post("/add", (req,res) => {
    
    const Task = new database(req.body);
    Task.save((err, doc) => {
        if (err) console.log(err.message);
        res.json(doc);

    })

})

// updating task in database
route.put("/update/:id",(req,res)=>{
    database.findByIdAndUpdate({_id:req.params.id},req.body,{new:true},(err,doc)=>{
        
        res.send(doc);
        console.log(doc)
       
    })
});



//deleting particular task in database

route.delete("/delete/:id",(req,res)=>{
    database.findByIdAndDelete({_id:req.params.id},(err,data)=>{
        res.send(data);
    })
})
module.exports=route;