const { Router } = require("express");
const PessoasController = require("../controllers/PessoaController");

const router = Router();
router
	.get("/pessoas", PessoasController.pegaTodasAsPessoas)
	.get("/pessoas/:id", PessoasController.pegaUmPessoa)
	.post("/pessoas", PessoasController.criaPessoa)
	.post("/pessoas/:id/restaura", PessoasController.restauraPessoa)
	.put("/pessoas/:id", PessoasController.atualizaPessoa)
	.delete("/pessoas/:id", PessoasController.apagaPessoa)

	.get(
		"/pessoas/:estudanteId/matricula/:matriculaId",
		PessoasController.pegaUmaMatricula
	)
	.post("/pessoas/:estudanteId/matricula", PessoasController.criaMatricula)
	.post(
		"/pessoas/:estudanteId/matricula/:matriculaId/restaura",
		PessoasController.restauraMatricula
	)
	.put(
		"/pessoas/:estudanteId/matricula/:matriculaId",
		PessoasController.atualizaMatricula
	)
	.delete(
		"/pessoas/:estudanteId/matricula/:matriculaId",
		PessoasController.apagaMatricula
	);

module.exports = router;
