const express = require("express");
const router = express.Router();
const controller = require("../controller/doadorController");

router.get("/all", controller.getAll);
router.post("/create", controller.postDoador);
router.put("/update/:id", controller.putDoador);
//router.delete("/delete/:id", controller.deleteDoador)

module.exports = router;