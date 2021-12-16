const express = require("express");
const router = express.Router();
const controller = require("../controller/beneficiarioController");

router.get("/all", controller.getAll);
router.post("/post", controller.postBeneficiario);
router.put("/update/:id", controller.putBeneficiario);
//router.delete("/delete/:id", controller.deleteBeneficiario)

module.exports = router;