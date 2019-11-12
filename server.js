const express = require('express');
const app = express();

app.listen(3002,()=>{
    console.log("Server is running")
})
app.use('/test',(req,res)=>{
    res.send({message:"Data is recieving"})
})


app.get('/getUser',(req,res)=>{
    res.send({
        name:"beerbal",
        fatherName:"Kirshan",
        city:"Mithi",
        school:"North Colony Mithi"
    })
})

console.log("Hello World");
