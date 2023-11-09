const express = require('express');
const router = express.Router();

exports.mostrarCalculadora = (req, res) => {
  res.render('index');
};

exports.calcular = (req, res) => {
  const { numeroA, numeroB, operacao } = req.body;
  let resultado;

  if (operacao === '+') {
    resultado = parseFloat(numeroA) + parseFloat(numeroB);
  } else if (operacao === '-') {
    resultado = parseFloat(numeroA) - parseFloat(numeroB);
  } else if (operacao === '*') {
    resultado = parseFloat(numeroA) * parseFloat(numeroB);
  } else if (operacao === '/') {
    resultado = parseFloat(numeroA) / parseFloat(numeroB);
  }

  res.render('index', { resultado });
};