const doadorSchema = require("../models/doadorSchema");
const mongoose = require("mongoose");

const getAll = async (req, res) => {
  try {
      const doador = await doadorSchema.find()
      res.status(200).json({message: "Todos os envolvidos foram encontrados", 

      doador})

  } catch (error) {
      res.status(500).json({mensagem: error.message})
  }
}

const postDoador = async (req, res) => {

  try {

    const createDoador = await doadorSchema.create(req.body)
    res.status(201).json({message: "Cadastro realizado com sucesso", createDoador })

} catch (error){
  res.status(500).json({message:error.message})
}
}

const putDoador  = async (req, res) => {
  try {
      const putDoador = await doadorSchema.findById(req.params.id);
       
      if(putDoador)   {
        putDoador.beneficiario =  req.body.beneficiario || putDoador.doador
        putDoador.idade = req.body.idade || putDoador.idade
        putDoador.equipamento = req.body.equipamento || putDoador.equipamento
        putDoador.endereco = req.body.endereco || putDoador.endereco
        putDoador.bairro = req.body.bairro || putDoador.bairro
        putDoador.cidade = req.body.cidade || putDoador.cidade
        putDoador.telefone = req.body.telefone || putDoador.telefone
        putDoador.pessoaDoadora = req.body.pessoaDoadora || putDoador.pessoaDoadora
      }
  } catch (error) {
      res.status(500).json({mensagem: error.message})
  }
}


module.exports = {
    getAll,
    postDoador,
    putDoador
    
};