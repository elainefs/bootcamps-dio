// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let resultado = gets();

//TODO:Retorne TRUE ou FALSE, caso a "palavra" seja ou não um Palíndromo.

var novaString = "";
    for (var i = resultado.length - 1; i >= 0; i--) {
        novaString += resultado[i];
    }
if(resultado === novaString){
    console.log("TRUE")
} else{
    console.log("FALSE")
}