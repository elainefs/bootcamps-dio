// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 


let lines = gets().split("\n"); 
let n = parseInt(lines.shift()); 

if (n <= 2) { 

 print(n); 

} 

// TODO: Calcule o valor do fatorial de "n", atribuindo o retorno a "r".


let numList = [];
let acumulador = 0;


while (n >= 0) {
 numList[n] = n;
 n--;
}
numList.shift();
numList.reverse();
if (numList.length >= 4) {
 acumulador = Math.floor((numList[0] * numList[1]) / numList[2]);
 acumulador = acumulador + numList[3];
 numList.splice(0, 4);
 
 while (numList.length >= 4) {
  acumulador = acumulador - Math.floor((numList[0] * numList[1]) / numList[2]);
  acumulador = acumulador + numList[3];
  numList.splice(0, 4);
    
 }
 if (numList.length == 3) {
  acumulador = acumulador - Math.floor((numList[0] * numList[1]) / numList[2]);
  numList.splice(0, 2);
  
 }


 if (numList.length == 2) {
  acumulador = acumulador - Math.floor(numList[0] * numList[1]);
  numList.splice(0, 2);
 }


 if (numList.length == 1) {
  acumulador = acumulador - Math.floor(numList[0]);
  numList.splice(0, 2);
 }
}
 
print(acumulador);