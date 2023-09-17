const express = require("express");
const app = require("./app.js");
const cors = require("cors");
const path = require("path");

app.use(cors()); // using cross origin requests

const port = process.env.port || 5000;

app.use(express.static(path.join(__dirname, "public")));

app.listen(process.env.PORT || 5000, () => {
    console.log(`Express server started at port ${port}`);
});