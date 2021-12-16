
require("dotenv-safe").config();
const express = require("express");
const cors = require("cors");
const db = require("./db/config.js");


const app = express();
db.connect();

app.use(cors());
app.use(express.json());


const beneficiario = require("./router/beneficiarioRouter");
const doador = require("./router/doadorRouter");
const index = require("./router/indexRouter");

app.use("/beneficiario", beneficiario);
app.use("/doador", doador);
app.use("/", index);






module.exports = app;