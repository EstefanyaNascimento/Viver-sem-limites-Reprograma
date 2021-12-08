const mongoose = require("mongoose");

const doadorSchema = new mongoose.Schema({
    nome : { type : String },
    endereco : { type : String },
    deficiencia : { type : String },
    itemDoado : { type : String }
}, {
    versionKey: false
});

const doadorSchema = mongoose.model("doador", doadorSchema);

module.exports = doador;