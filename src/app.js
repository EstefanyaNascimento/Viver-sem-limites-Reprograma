const express = require("express");
const cors = require("cors");
const db = require("./db/config.js");
const app = express();

const doadorRoutes = require("./router/doadorRouter");

require("dotenv-safe").config();
db.connect();

app.use(cors());
app.use(express.json());


app.use("/doadores", doadorRoutes);


module.exports = app;