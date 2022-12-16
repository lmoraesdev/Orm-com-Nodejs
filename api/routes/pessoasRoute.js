const { Router } = require("express");
const PessoasController = require("../controllers/PessoaController");

const router = Router();

router.get("/pessoas", PessoasController.pegaTodasAsPessoas);

module.exports = router
