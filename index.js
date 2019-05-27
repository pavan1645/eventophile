const express = require("express");
const compression = require("compression");

const app = express();

const PORT = 8000;

app.use(compression());
app.use(express.static(__dirname + "/public"));

app.listen(process.env.PORT ||  PORT);