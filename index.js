const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.post("/",(req,res)=> {
    var height = req.body.Height 
    var weight = req.body.Weight 
    var BMI =  ( weight / (height * height ) ) * 10000
    res.send("the calculated BMI is  : " + BMI );
});

app.listen(3000,()=>{
    console.log("server is active in the port : 3000");
});
