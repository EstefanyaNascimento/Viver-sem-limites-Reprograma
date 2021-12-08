const express = require('express')
const router = express.Router()

const controller = require("../controller/inclusaoController")

router.get('/', controller.getAll)  //lista todas as especialidades de atendimento
router.get('/buscar', controller.getId) // lista faixa etaria de atendimento por especialidade
router.post('/create', controller.create)// novo item,  especialidade de atendimento
router.delete('/:id/remove', controller.removeModalidade)// remove modalidade/ especialidade de atendimento
router.put('/:id/update', controller.update) // atualiza novas especialidades



module.exports =router


