require('dotenv-safe').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors')
const app = express();
const database = require('./database/config')

const beneficiario = require("./router/beneficiarioRouter");
const doador = require("./router/doadorRouter");


mongoose.connect(`${process.env.MONGODB_URL}`, { useNewUrlParser: true, useUnifiedTopology: true });

let db = mongoose.connection;
db.on("error", console.log.bind(console, "connection error:"));
db.once("open", function (){
    console.log("Conexão feita com sucesso!");
});

app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-Woth, Content-Type, Accept"
    );
    next();
});

app.use("/beneficiario", beneficiario);
app.use("/doador", doador);



database.connect()

module.exports = app;