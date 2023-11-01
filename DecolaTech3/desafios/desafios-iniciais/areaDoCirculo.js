// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

const TT = 3.14159;
var raio = parseFloat(gets());

//TODO: Complete os espaços em branco com uma possível solução para o desafio

var area = TT *  Math.pow(raio, 2);
print("A=" + area.toFixed(4));

// A fórmula para calcular a área de uma circunferência é: area = π . raio2. Considerando para este problema que π = 3.14159:

// - Efetue o cálculo da área, elevando o valor de raio ao quadrado e multiplicando por π.