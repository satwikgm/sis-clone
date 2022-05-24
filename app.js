const express = require("express");
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.urlencoded({extended : true}));

app.get("/" , function(req , res)
{
    res.sendFile(__dirname + "/index.html");
});

app.get("/" , function(req , res)
{
    res.sendFile(__dirname + "/styles.css");
});

app.listen(3002 , function()
{
    console.log("Server started on port 3000");
});