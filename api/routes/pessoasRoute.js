const { Router } = require("express");
const { pegaTodasAsPessoas } = require("../controllers/PessoaController");
const PessoasController = require("../controllers/PessoaController");

const router = Router();

router.get("/pessoas", PessoasController.pegaTodasAsPessoas);
router.get("/pessoas/:id", PessoasController.pegaUmPessoa);
router.post("/pessoas", PessoasController.criaPessoa);
router.put("/pessoas/:id", PessoasController.atualizaPessoa)

module.exports = router;
