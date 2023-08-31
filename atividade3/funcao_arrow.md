As funções arrow (ou "funções de seta") são uma forma concisa de definir funções em JavaScript. Elas foram introduzidas no ECMAScript 6 (ES6) e oferecem uma sintaxe mais enxuta em comparação com as funções tradicionais. As funções arrow têm algumas diferenças importantes em relação às funções tradicionais, como a maneira como lidam com o contexto do this.

sintaxe:

const nomeDaFuncao = (parametro1, parametro2) => { // corpo da função return resultado; };

Exemplo de uso:

// Função tradicional function soma(a, b) { return a + b; }

// Função arrow equivalente const somaArrow = (a, b) => a + b;

console.log(soma(2, 3)); // Saída: 5 console.log(somaArrow(2, 3)); // Saída: 5