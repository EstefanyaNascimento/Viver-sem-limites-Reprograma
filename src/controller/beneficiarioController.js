const beneficiario = require("../models/beneficiarioSchema.js");
const SECRET = process.env.SECRET
const jwt = require("jsonwebtoken");
const fs = require("fs");

/*const getAll = (req, res) => {
    const authHeader = req.get("authorization");

    if (!authHeader){
        return res.status(401).send("Insira o header!");
    };

    const token = authHeader.split(" ")[1];

    jwt.verify(token, SECRET, function(erro) {
        if(erro) {
            return res.status(403).send("O seu token é inválido!")
        }

        beneficiario.find(function (err, beneficiario){
            if(err){
                res.status(500).send({ message : err.message })
            }
            res.status(200).send(beneficiario);
        });
    })

};*/

//Vai buscar todos os usuários cadastrados
const getAll = async (req, res) => {
  try {
      const beneficiario = await beneficiarioSchema.find()
      res.status(200).json({message: "Todos os envolvidos foram encontrados", 

      beneficiario})

  } catch (error) {
      res.status(500).json({mensagem: error.message})
  }
}


const postBeneficiario = (req, res) => {
    console.log(req.body);
  
    let beneficiario= new beneficiario(req.body);
    beneficiario.save(function(err){
      if (err) res.status(500).send({ message: err.message });
      res.status(201).send(beneficiario.toJSON());
    });
  };

  const putBeneficiario = (req, res) => {
    const _id = req.params._id;
  
    try {
        beneficiario.update(
          { _id },
          { $set: req.body },
          { upsert : true},
          function (err) {
          res.status(201).send({ message: "Beneficiario atualizada com sucesso!" });
      });
    } catch (err) {
      return res.status(424).send({ message: err.message });
    };
  };

  const deleteBeneficiario = (req, res) => {
    const _id = req.params._id;

    beneficiario.deleteOne({ _id }, function(err, beneficiario) {
      if(err) {
        return res.status(424).send({ message: err.message})
      } else {
        return res.status(200).send(beneficiario)
      }
    })
};


module.exports = {
    getAll,
    postBeneficiario,
    putBeneficiario,
    deleteBeneficiario
};