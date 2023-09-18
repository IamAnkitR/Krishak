const express = require("express");
const app = require("./app.js");
const cors = require("cors");
const path = require("path");

app.use(cors()); // using cross origin requests

const port = process.env.port || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
    console.log(`Express server started at port ${port}`);
});