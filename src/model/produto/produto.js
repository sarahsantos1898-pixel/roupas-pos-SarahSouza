// src/model/produto/produto.js
module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define('Produto', {
    nome: DataTypes.STRING,
    preco: DataTypes.FLOAT,
    categoria: DataTypes.STRING,
    funcionarioId: DataTypes.INTEGER
  });

  Produto.associate = models => {
    Produto.belongsTo(models.Funcionario, {
      foreignKey: 'funcionarioId',
      as: 'funcionario'
    });
  };

  return Produto;
};