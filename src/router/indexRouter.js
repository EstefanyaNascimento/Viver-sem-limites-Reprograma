const express = require("express");
const router = express.Router();

router.get("/",  (req, res) => {
    res.status(200).send({
        title: "Reprograma -> Viver sem limites - Projeto Final",
        version: "1.0.0",
        mensagem: "Olá mundo! Esta é uma versão de API focada em ajudar pessoas com deficiência a doar e receber equipamentod de forma gratuita."
    })
})

module.exports = router