const express = require("express");

const app = express();

app.use(express.json());

const data = require("./data.json");

app.get("ping",(req,res)=>{
    return res.status(200).send("pong");
})

app.get("/user",(req,res)=>{
    try{
        return res.status(200).send({message:"server connected succefully",userData:data});


    }catch(error){
        return res.status(500).send({message:"Something went wrong",error});

    }

});

app.put("/email",(req,res)=>{
    try{

        const {email,password} = req.body;
        if (!email || !password){
            return res.status(400).send({message:"include evrything"});
        }
        app.push(data),{
            email,
            password
        }
        return res.status(201).send({message:"connected succefully"});


    }catch(error){
        return res.status(500).send({message:"something went wrong",error});
    }
})



app.listen(8080,()=>{
     console.log("connected succefully");

})