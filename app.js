const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

var fakeData = require("faker");
var randomName = fakeData.internet.email();
console.log(randomName);

//routes 
app.get("/", function(req,res) {
    res.render("home.html", {fakeName: randomName});
});

app.get("/graph", function(req,res) {
    res.render("graph.html", {fakeName: randomName});
});

app.get("/search", function(req,res) {
    res.render("search.html", {fakeName: randomName});
});

app.get("/sort", function(req,res) {
    res.render("sort.html", {fakeName: randomName});
});


//server listener
app.listen(process.env.PORT, process.env.IP, function() {
   console.log("Express Server is Running....."); 
});

