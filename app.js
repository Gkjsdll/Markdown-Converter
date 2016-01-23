"use strict";

const PORT = 4000;

var express = require("express");
var http = require("http");
var bodyParser = require("body-parser");
var logger = require("morgan");
var fs = require("fs");
var app = express();

var mdRouter = require("./routes/markdown");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static('public'));
app.use("/markdown", mdRouter)

app.get("/", function(req, res){
  var html = fs.readFileSync("index.html").toString();
  res.send(html)
});


app.listen(PORT, function(){
  console.log("Express server listening on port", PORT);
})
