// using the express to create http request for the serve
//step 1 to import the express
import bodyParser from "body-parser";
import express from "express";
// to find the path of the static file in the public folder
import { dirname } from "path";
import { fileURLToPath } from "url";
var __dirname = dirname(fileURLToPath(import.meta.url));
var app = express();
var port = 8080;

// import the body body parser and mount it
import bodyParserf from "body-parser";
app.use(bodyParser.urlencoded({ extended: true}));

// import the modern module and moount it

import morgan from "morgan";
app.use(morgan("combined"));

// this is the get request

// my own middlware
import logger from (__dirname +"/module.js");

app.use(logger);

app.get("/", (req, res) =>
{
    res.sendFile( __dirname + "/public/index.html");
})

// this will be the post request


// create a post request to bring the user to the login page once he summits 

app.post("/login", (req, res)=>
{
    console.log(req.body);
    res.send("hwy bro welcome to this post request and congrats from completeing the express js module on the 13 of february 2024")
    console.log(req.morgan);
});


app.listen(port , ()=>
{
    console.log(`server running on port ${port}`);
})

// rendering the static files with express js
// inorder to render a file in express you need its exact path 
// you can render the file using the res.sendFile