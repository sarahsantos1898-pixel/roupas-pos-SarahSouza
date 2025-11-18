const { Produto, Funcionario } = require('../../model');

module.exports = {
  async index(req, res) {
    const produtos = await Produto.findAll({ include: ['funcionario'] });
    res.json(produtos);
  },

  async show(req, res) {
    const produto = await Produto.findByPk(req.params.id, { include: ['funcionario'] });
    if (!produto) return res.status(404).json({ error: 'Produto não encontrado' });
    res.json(produto);
  },

  async store(req, res) {
    const { nome, preco, categoria, funcionarioId } = req.body;
    const produto = await Produto.create({ nome, preco, categoria, funcionarioId });
    res.status(201).json(produto);
  },

  async update(req, res) {
    const { nome, preco, categoria, funcionarioId } = req.body;
    const produto = await Produto.findByPk(req.params.id);
    if (!produto) return res.status(404).json({ error: 'Produto não encontrado' });

    await produto.update({ nome, preco, categoria, funcionarioId });
    res.json(produto);
  },

  async destroy(req, res) {
    const produto = await Produto.findByPk(req.params.id);
    if (!produto) return res.status(404).json({ error: 'Produto não encontrado' });

    await produto.destroy();
    res.status(204).send();
  }
};