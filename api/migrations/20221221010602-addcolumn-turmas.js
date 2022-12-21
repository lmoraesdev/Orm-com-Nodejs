"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn("Turmas", "deleteAt", {
			allowNull: true,
			type: Sequelize.DATE,
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.removeColumn("Turmas", "deletedAt");
	},
};
