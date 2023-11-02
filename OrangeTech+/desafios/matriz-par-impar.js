// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.
// - ".split(''): transforma a entrada em um array separado por aspas simples

let arr = gets().split(''); 
let arrVazio = []; 

// TODO: crie a condição necessária para que o array fique ordenado como o exercício pede

arr.forEach((item) => {
 if(item % 2 ==0){
  arrVazio.unshift(item)
 } else {
  arrVazio.push(item)
 }
})
print(arrVazio)