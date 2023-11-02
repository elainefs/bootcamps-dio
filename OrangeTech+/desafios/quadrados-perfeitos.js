// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let lines = gets().split("\n"); 
let n = parseInt(lines.shift()); 

const dp = new Array(n + 1).fill(Infinity); 
dp[0] = 0; 

//TODO: Com base no valor total, retorne o menor número de quadrados perfeitos.

function minSquares(n) {
    var min = n;
    for (var i = 1; i * i <= n; i++) {
      var temp = 1 + minSquares(n - i * i);
      if (temp < min) {
        min = temp;
      }
    }
    return min;
  };


console.log(minSquares(n))