// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

const value = gets();
const stack = ['(',')','{','}','[',']'];


function isValid (s) {
  let i = 0;
  while( i < (s.length-1)) {
     if(stack.indexOf(s[i]) != -1){
        if(stack[stack.indexOf(s[i])+1] == s[i+1]){
            return true;
        }     
      }
    i++;
    return false;
    }
}

print(isValid(value))