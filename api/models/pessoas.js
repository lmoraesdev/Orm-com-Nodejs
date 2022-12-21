"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Pessoas extends Model {
		static associate(models) {
			Pessoas.hasMany(models.Turmas, {
				foreignKey: "docente_id",
			});
			Pessoas.hasMany(models.Matriculas, {
				foreignKey: "estudante_id",
				scope: { status: "confirmando" },
				as: "aulasMatriculadas"
			});
		}
	}
	Pessoas.init(
		{
			name: {
				type: DataTypes.STRING,
				validate: {
					funcaovalidadora: function (dado) {
						if (dado.length < 3)
							throw new Error("O campo nome deve ter mais de 3 caracteres");
					},
				},
			},
			ativo: DataTypes.BOOLEAN,
			email: {
				type: DataTypes.STRING,
				validate: {
					isEmail: {
						args: true,
						msg: "dado do tipo e-mail invalidos",
					},
				},
			},
			role: DataTypes.STRING,
		},
		{
			sequelize,
			paranoid: true,
			defaultScope: {
				where: { ativo: true },
			},
			scopes: {
				todos: { where: {} },
			},
			modelName: "Pessoas",
		}
	);
	return Pessoas;
};
