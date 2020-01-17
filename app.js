const express = require("express");

var app = express();

var server = app.listen(3006);
app.use(express.static('./dists'));
console.log(" server success port: 3006");
