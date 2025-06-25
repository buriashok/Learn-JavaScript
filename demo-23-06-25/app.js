//node js
const express = require("express");
const app = express();
app.use(express.static('public'));

app.use((req,res,next) => {
    console.log("HAHAHAHAHA");
    next();
})

app.get("/",(req,res) =>{
    res.send("hiiii");
});

app.get("/about",(req,res) =>{
    res.send("about page");
});

app.listen(3000);
