const inclusaoSchema = require('../models/beneficiarioSchema')
const mongoose = require('mongoose')

//Fazer get todas as modalidades de atendimento
const getAll = async (req, res) => {
    try {
        const modalidades = inclusaoSchema.find()
        res.status(200).json(modalidades)

    } catch (error) {
        res.status(500).json({mensagem: error.message})
    }
}

module.exports = {
    getAll,
    musicaPorId,
    createMusic
    
}