// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let resultado = gets();
print(fizzBuzz(resultado));

//TODO: Caso o valor não seja múltiplo de 3 ou 5, exiba o número, conforme o enunciado.

function fizzBuzz (n){
 let result = ""
 if(n > 0){
  let m3 = (n % 3 === 0)
  let m5 = (n % 5 === 0)
    if( m3 ){
      result += "Fizz";
    }
    
    if( m5 ){
      result += "Buzz";
    }
    
    if( (!(m3)) && (!(m5)) ){
      return n;
    }
 }
  return result;
}