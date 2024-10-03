'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    CPF: DataTypes.STRING,
    email: DataTypes.STRING,
    celular: DataTypes.STRING,
    Endereço: DataTypes.STRING,
    Bairro: DataTypes.STRING,
    Cidade: DataTypes.STRING,
    CEP: DataTypes.STRING,
    complemento: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};