'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      CPF: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      celular: {
        type: Sequelize.STRING
      },
      Endereço: {
        type: Sequelize.STRING
      },
      Bairro: {
        type: Sequelize.STRING
      },
      Cidade: {
        type: Sequelize.STRING
      },
      CEP: {
        type: Sequelize.STRING
      },
      complemento: {
        type: Sequelize.STRING
      },
      senha: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};