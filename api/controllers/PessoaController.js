const { NUMBER } = require("sequelize");
const database = require("../models");
const pessoas = require("../models/pessoas");

class PessoasController {
	static async pegaPessoasAtivas(req, res) {
		try {
			const pessoasAtivas = await database.Pessoas.findAll();
			return res.status(200).json(pessoasAtivas);
		} catch {
			return res.status(500).json(error.message);
		}
	}

	static async pegaTodasAsPessoas(req, res) {
		try {
			const todasAsPessoas = await database.Pessoas.scope("todos").findAll();
			return res.status(200).json(todasAsPessoas);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async pegaUmaPessoa(req, res) {
		const { id } = req.params;
		try {
			const umaPessoa = await database.Pessoas.findOne({
				where: { id: Number(id) },
			});
			return res.status(200).json(umaPessoa);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async criaPessoa(req, res) {
		const novaPessoa = req.body;
		try {
			const novaPessoaCriada = await database.Pessoas.create(novaPessoa);
			return res.status(200).json(novaPessoaCriada);
		} catch {
			return res.status(500).json(error.message);
		}
	}

	static async atualizaPessoa(req, res) {
		const { id } = req.params;
		const novasInfos = req.body;
		try {
			await database.Pessoas.update(novasInfos, { where: { id: Number(id) } });
			const pessoasAtualizada = await database.Pessoas.findOne({
				where: { id: Number(id) },
			});
			return res.status(200).json(pessoasAtualizada);
		} catch {
			return res.status(500).json(error.message);
		}
	}

	static async apagaPessoa(req, res) {
		const { id } = req.params;
		try {
			await database.Pessoas.destroy({
				where: { id: Number(id) },
			});
			return res.status(200).json({ message: `id ${id} deletado` });
		} catch {
			return res.status(500).json(error.message);
		}
	}

	static async restauraPessoa(req, res) {
		const { id } = req.params;
		try {
			await database.Pessoas.restore({
				where: { id: Number(id) },
			});
			return res.status(200).json({ message: `id ${id} restaurado` });
		} catch {
			return res.status(500).json(error.message);
		}
	}

	//matriculas

	static async pegaUmaMatricula(req, res) {
		const { estudanteId, matriculaId } = req.params;
		try {
			const umaMatricula = await database.Matriculas.findOne({
				where: {
					id: Number(matriculaId),
					estudanteId: NUMBER(estudanteId),
				},
			});
			return res.status(200).json(umaMatricula);
		} catch {
			return res.status(500).json(error.message);
		}
	}

	static async criaMatricula(req, res) {
		const { estudanteId } = req.params;
		const novaMatricula = { ...req.body, estudanteId: Number(estudanteId) };
		try {
			const novaMatriculaCriada = await database.Matriculas.create(
				novaMatricula
			);
			return res.status(200).json(novaMatriculaCriada);
		} catch {
			return res.status(500).json(error.message);
		}
	}

	static async atualizaMatricula(req, res) {
		const { estudanteId, matriculaId } = req.params;
		const novasInfos = req.body;
		try {
			await database.Matriculas.update(novasInfos, {
				where: { id: Number(matriculaId), estudanteId: Number(estudanteId) },
			});
			const matriculaAtualizada = await database.Matriculas.findOne({
				where: { id: Number(matriculaId) },
			});
			return res.status(200).json(matriculaAtualizada);
		} catch {
			return res.status(500).json(error.message);
		}
	}

	static async apagaMatricula(req, res) {
		const { estudanteId, matriculaId } = req.params;
		try {
			await database.Matriculas.destroy({
				where: { id: Number(matriculaId) },
			});
			return res.status(200).json({ message: `id ${matriculaId} deletado` });
		} catch {
			return res.status(500).json(error.message);
		}
	}

	static async restauraMatricula(req, res) {
		const { estudanteId, matriculaId } = req.params;
		try {
			await database.Matriculas.restore({
				where: {
					id: Number(matriculaId),
					estudanteId: Number(estudanteId),
				},
			});
			return res.status(200).json({ message: `id ${matriculaId} restaurado` });
		} catch {
			return res.status(500).json(error.message);
		}
	}

	static async pegaMatricula(req, res) {
		const { estudanteId } = req.params;
		try {
			const pessoa = await  database.Pessoas.findOne({where: {id: Number(estudanteId)}});
			const matriculas = await pessoas.getAulasMatriculadas()
			return res.status(200).json({ message: `id ${matriculas} deletado` });
		} catch {
			return res.status(500).json(error.message);
		}
	}
}

module.exports = PessoasController;
