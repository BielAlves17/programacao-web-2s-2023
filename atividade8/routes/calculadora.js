const express = require('express');
const router = express.Router();
const calculadoraController = require('../controller/calculadoraController');

router.get('/', calculadoraController.mostrarCalculadora);
router.post('/calcular', calculadoraController.calcular);

module.exports = router;