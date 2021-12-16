const mongoose = require("mongoose");

const beneficiarioSchema = new mongoose.Schema({
    beneficiario: { type : String },
    idade : { type : String },
    itemreceber : { type : String },
    endereco: { type : String },
    bairro: { type : String },
    cidade: { type : String },
    telefone: { type : String },
    pessoabeneficiada: { type : String },
}, {
    versionKey: false
});

const beneficiario = mongoose.model("beneficiario", beneficiarioSchema);

module.exports = beneficiario;
