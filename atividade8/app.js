const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const calculadoraRoute = require('./routes/calculadora');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', calculadoraRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});