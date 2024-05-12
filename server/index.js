const express = require('express');

const app = express();

app.get("/",(req,res)=>{
res.send("app is woring..")
});

app.listen(3000)