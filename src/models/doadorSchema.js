const mongoose = require("mongoose");

const doadorSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    doador: {
        type: String,
        required: true
    },
    idade: {
        type: String,
        required: true
    },
    equipamento: {
        type: String,
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
   
    
}, { timestamps: true })


module.exports = mongoose.model("doador", doadorSchema);