const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // using cross origin requests

app.get("/", (req, res) => {
    res.send("Hello World");
})

module.exports = app;