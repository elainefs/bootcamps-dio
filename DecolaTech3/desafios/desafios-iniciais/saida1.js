// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar


//TODO: Complete os espaços em branco com uma possível solução para o desafio
print('---------------------------------------');



print('|                   |');

print('|                   |');

print('|                   |');

print('|                   |');

print('|                   |');



var resultado = "";

  for (i = 1; i <= 7; i++) {

    for (p = 1; p <= 39; p++) {

      if (i == 1 || i == 7)

        resultado += "-";

      else if (p == 1 || p == 39)

        resultado += "|";

      else 

        resultado += " ";

    }

    resultado += "\n";

  }

   

print('---------------------------------------');

