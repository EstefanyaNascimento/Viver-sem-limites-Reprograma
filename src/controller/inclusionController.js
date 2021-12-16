const beneficiarioSchema = require("../models/beneficiarioSchema");
const doadorSchema = require("../models/doadorSchema");

//Fazer um GET ALL

const getAll = (req, res) => {  
    
    res.status(200).send([beneficiarioSchema, doadorSchema])
}
module.exports = {

getAll

}