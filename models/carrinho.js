'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class carrinho extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  carrinho.init({
    userId: DataTypes.STRING,
    ProductId: DataTypes.STRING,
    quantityId: DataTypes.STRING,
    price: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'carrinho',
  });
  return carrinho;
};