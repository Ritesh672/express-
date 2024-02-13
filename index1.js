import logger from ("/module.js");


// to user the middleware which is the body parser


import express from "express";
const app = express();
const port = 8080;


app.use(logger);
// import the body parser and mount it 

import bodyParser from "body-parser";

// mount it

app.use(bodyParser.urlencoded({ extended: true}));


app.post ("/login", (req , res) =>
{
    console.log(req.body);
});

app.listen(port , ()=>
{
    console.log("server running on port 3000");
});