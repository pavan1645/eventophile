const express = require("express");
const app = express();

const PORT = 8000;

app.use(express.static(__dirname + "/public"));

app.listen(process.env.PORT ||  PORT);