const mongoose = require("mongoose");

const beneficiarioSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true
    },
    idade: {
        type: String,
        required: true
    },
    equipamento: {
        type: Number,
        required: true 
    },
    bairro: {
        type: String,
        required: true 
    },
    cidade: {
        type: String,
        required: true 
    },
    telefone: {
        type: String,
        required: true
    },
    pessoabeneficiada: {
        type: Array
    },
    
}, { timestamps: true })

const beneficiario = mongoose.model("Beneficiario", beneficiarioSchema);

module.exports = beneficiario
