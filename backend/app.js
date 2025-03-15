const express = require("express");

const app = express();

const cors = require("cors");

const cookieParser = require("cookie-parser");

require("./config/db");

const routes = require("./routes/v1/index");
const config = require("./config");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true })); //to allow nested object data from frontend
app.use(cookieParser());
app.use(config.PREFIX, routes);
// app.use();

module.exports = app;
