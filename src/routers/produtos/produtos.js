const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtos/produtosController.js');

router.get('/produtos', produtosController.index);
router.get('/produtos/:id', produtosController.show);
router.post('/produtos', produtosController.store);
router.put('/produtos/:id', produtosController.update);
router.delete('/produtos/:id', produtosController.destroy);

module.exports = router;