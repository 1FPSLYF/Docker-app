const express = require("express");
console.log(' hi  here')
const app = express();
app.get('/',(req, res)=>{
    res.send("welcome Harsh");
});
app.listen(4000 , ()=>{
    console.log("app Listening on port 4000");
});