const beneficiario = require("../models/beneficiarioSchema.js");
const SECRET = process.env.SECRET



const getAll = async (req, res) => {
  try {
      const beneficiario = await beneficiarioSchema.find()
      res.status(200).json({message: "Todos os envolvidos foram encontrados", 

      beneficiario})

  } catch (error) {
      res.status(500).json({mensagem: error.message})
  }
}


const postBeneficiario = async (req, res) => {

    try {

      const createBeneficiario = await beneficiario.create(req.body)
      res.status(201).json({message: "Cadastro realizado com sucesso", createBeneficiario  })

  } catch (error){
    res.status(500).json({message:error.message})
  }
}

const putBeneficiario  = async (req, res) => {
    try {
        const putBeneficiario = await beneficiario.findById(req.params.id)
         
        if(putBeneficiario)   {
            putBeneficiario.beneficiario =  req.body.beneficiario || putBeneficiario.benficiario
            putBeneficiario.idade = req.body.idade || putBeneficiario.idade
            putBeneficiario.equipamento = req.body.equipamento || putBeneficiario.equipamento
            putBeneficiario.endereco = req.body.endereco || putBeneficiario.endereco
            putBeneficiario.bairro = req.body.bairro || putBeneficiario.bairro
            putBeneficiario.cidade = req.body.cidade || putBeneficiario.cidade
            putBeneficiario.telefone = req.body.telefone || putBeneficiario.telefone
            putBeneficiario.pessoabeneficiada = req.body.pessoabeneficiada || putBeneficiario.pessoabeneficiada



            const salvarBeneficiario = await putBeneficiario.save();
            res.status(200).json({
                message: "Dados do beneficiario atualizados com sucesso.",
                salvarBeneficiario
            });
        }

        res.status(400).json({message: "Beneficiario não encontrado!"});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


module.exports = {
    getAll,
    postBeneficiario,
    putBeneficiario
    
}
