const database = require("../models");

class PessoasController {
	static async pegaTodasAsPessoas(req, res) {
		try {
			const todasAsPessoas = await database.Pessoas.findAll();
			return res.status(200).json(todasAsPessoas);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async pegaUmPessoa(req, res) {
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
				where: { id: Number(id) }
			})
			return res.status(200).json(pessoasAtualizada)
		} catch {
			return res.status(500).json(error.message);
		}
	}
}

module.exports = PessoasController;
