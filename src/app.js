const express = require("express");
const cors = require("cors");
const db = require("./db/config.js");
const app = express();

const index = require("./router/indexRouter");
const doadorRoutes = require("./router/doadorRouter");



require("dotenv-safe").config();
db.connect();

app.use(cors());
app.use(express.json());

app.use("/", index);
app.use("/doadores", doadorRoutes);


module.exports = app;