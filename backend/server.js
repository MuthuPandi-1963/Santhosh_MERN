import express from 'express'
import dbConfig from './db/dbConfig.js'
import employeeRoutes from './routes/employeeRoutes.js'

const app = express()
// if you get a from user or client sides you need import that line
app.use(express.json())
app.get("/",(req,res)=>{
    res.json({
        data : "welcome to home page learn MERN"
    })
})
// router config
app.use("/employee",employeeRoutes)

app.listen(3000,()=>{
    dbConfig()
    console.log("server running successfully on port : 3000 ");
    
})