const express = require('express')
const app=express()
const PORT = 3000;

app.use(express.json())

app.get("/test",(req,res)=>{
    res.send("Ari server running..")
})

app.listen(PORT)