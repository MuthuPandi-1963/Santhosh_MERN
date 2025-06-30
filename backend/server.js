import express from 'express'

const app = express()

app.get("/",(req,res)=>{
    res.json({
        data : "welcome to home page learn MERN"
    })
})

app.listen(5000,()=>{
    console.log("server running successfully on port : 5000 ");
    
})