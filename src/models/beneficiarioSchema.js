const mongoose = require("mongoose");

const beneficiarioSchema = new mongoose.Schema({
    nome : { type : String },
    idade : { type : String },
    deficiencia : { type : String },
    pessoaFacilitadora : { type : String }
}, {
    versionKey: false
});

const beneficiario = mongoose.model("beneficiario", beneficiarioSchema);

module.exports = beneficiario;
