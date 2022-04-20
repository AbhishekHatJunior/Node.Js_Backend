const express = require("express");
const app = express();

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/forms.html");
});

app.get("/about", (req,res)=>{
    res.send("Welcome to the about page");
});

app.get("/contact",(req,res)=>{
    res.send("For any queries, contact us on this page");
});

app.listen(7000, ()=>{
    console.log("Server started at port no: 7000");
});

