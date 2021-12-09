const express = require("express");
const cors = require('cors')
require('dotenv-safe').config();
const database = require('./database/config')

const beneficiario = require("./router/beneficiarioRouter");
const doador = require("./router/doadorRouter");

const app = express();
/*const mongoose = require("mongoose");


mongoose.connect(`${process.env.MONGODB_URI}`, { useNewUrlParser: true, useUnifiedTopology: true });*/

//db.on("error", console.log.bind(console, "connection error:"));
//db.once("open", function (){
    //console.log("Conexão feita com sucesso!");
//});*//


/*app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-Woth, Content-Type, Accept"
    );
    next();
});*/

app.use(cors());
app.use("/beneficiario", beneficiario);
app.use("/doador", doador);

database.connect()


module.exports = app;