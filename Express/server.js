var express = require("express");
var path = require("path");
var fs = require("fs");
var app = express();

function onDefault(req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
}

app.use(express.static(path.join(__dirname, "public")));

app.get("/", onDefault);

app.get("/api/getDetails", (req,res)=>
{
    var fl = fs.readFileSync("./public/file.json");
    var a = JSON.parse(fl);
    res.send(a);
});

var server = app.listen(8082, () => {
    console.log("express running on http://localhost:8081");
});