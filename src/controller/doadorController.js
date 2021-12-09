const doador = require("../models/doadorSchema.js");
const SECRET = process.env.SECRET
const jwt = require("jsonwebtoken");
const fs = require("fs");

const getAll = (req, res) => {
    const authHeader = req.get("authorization");

    if (!authHeader){
        return res.status(401).send("Insira o header!");
    };

    const token = authHeader.split(" ")[1];

    jwt.verify(token, SECRET, function(erro) {
        if(erro) {
            return res.status(403).send("O seu token é inválido!")
        }

        doador.find(function (err, doador){
            if(err){
                res.status(500).send({ message : err.message })
            }
            res.status(200).send(doador);
        });
    })

};

const postDoador = (req, res) => {
    console.log(req.body);
  
    let doador = new doador(req.body);
    doador.save(function(err){
      if (err) res.status(500).send({ message: err.message });
      res.status(201).send(doador.toJSON());
    });
  };

  const putDoador = (req, res) => {
    const _id = req.params._id;
  
    try {
        doador.update(
          { _id },
          { $set: req.body },
          { upsert : true},
          function (err) {
          res.status(201).send({ message: "Dados do doador atualizados com sucesso!" });
      });
    } catch (err) {
      return res.status(424).send({ message: err.message });
    };
  };

  const deleteDoador = (req, res) => {
    const _id = req.params._id;

    doador.deleteOne({ _id }, function(err, doador) {
      if(err) {
        return res.status(424).send({ message: err.message})
      } else {
        return res.status(200).send(doador)
      }
    })
};


module.exports = {
    getAll,
    postDoador,
    putDoador,
    deleteDoador
};