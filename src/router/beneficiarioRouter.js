const express = require("express");
const router = express.Router();
const controller = require("../controller/beneficiarioController");

router.get("/all", controller.getAll);
router.post("/post", controller.postBeneficiario);
router.put("/:_id", controller.putBeneficiario);
router.delete("/:_id", controller.deleteBeneficiario)

module.exports = router;