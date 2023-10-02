const express = require('express');
const app = express();
const calculadora = require('./util/calculadora');


app.get('/somar/:a/:b', (req, res) => {
  const { a, b } = req.params;
  const resultado = calculadora.somar(Number(a), Number(b));
  res.send(`A soma de ${a} e ${b} é igual a ${resultado}`);
});


app.get('/subtrair/:a/:b', (req, res) => {
  const { a, b } = req.params;
  const resultado = calculadora.subtrair(Number(a), Number(b));
  res.send(`A subtração de ${a} e ${b} é igual a ${resultado}`);
});


app.get('/multiplicar/:a/:b', (req, res) => {
  const { a, b } = req.params;
  const resultado = calculadora.multiplicar(Number(a), Number(b));
  res.send(`A multiplicação de ${a} e ${b} é igual a ${resultado}`);
});


app.get('/dividir/:a/:b', (req, res) => {
  const { a, b } = req.params;
  if (b === '0') {
    res.status(400).send('Não é possível dividir por zero');
  } else {
    const resultado = calculadora.dividir(Number(a), Number(b));
    res.send(`A divisão de ${a} por ${b} é igual a ${resultado}`);
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
