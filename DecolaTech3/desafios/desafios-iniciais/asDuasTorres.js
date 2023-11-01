// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let input = gets().split(" "); 
let n, x, y; 

n =  parseInt(input[0]); 
x =  parseInt(input[1]); 
y =  parseInt(input[2]); 

//TODO: Complete os espaços em branco com uma possível solução para o desafio

let resultado = n / (x + y); 
print(resultado.toFixed(2));

// para calcular o ICM para Palantír’s, basta dividir a distância entre os dois Palantír’s, pela soma do diâmetro dos mesmos.