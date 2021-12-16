const mongoose = require("mongoose");

const doadorSchema = new mongoose.Schema({
    doador: { type : String },
    idade : { type : String },
    equipamento : { type : String },
    endereco: { type : String },
    bairro: { type : String },
    cidade: { type : String },
    telefone: { type : String },
    pessoadoadora: { type : String },
}, {
    versionKey: false
});

const doador = mongoose.model("doador", doadorSchema);

module.exports = doador;