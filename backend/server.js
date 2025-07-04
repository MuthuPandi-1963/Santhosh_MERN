import express from 'express'
import dbConfig from './db/dbConfig.js'

const app = express()

app.get("/",(req,res)=>{
    res.json({
        data : "welcome to home page learn MERN"
    })
})

app.listen(5000,()=>{
    dbConfig()
    console.log("server running successfully on port : 3000 ");
    
})