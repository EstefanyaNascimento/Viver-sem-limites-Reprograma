const express = require("express");
const router = express.Router();
const controller = require("../controller/doadorController");

router.get("/", controller.getAll);
router.post("/", controller.postDoador);
router.put("/:_id", controller.putDoador);
router.delete("/:_id", controller.deleteDoador)

module.exports = router;