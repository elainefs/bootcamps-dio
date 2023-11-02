/*
Elabore um algoritmo qua calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1 - À vista Débito: recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX: recebe 15% de desconto;
3 - Em duas vezes: preço normal de etiqueta sem juros;
4 - Acima de duas vezes: preço normal de etiqueta mais juros de 10%;
*/

const precoEtiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
  const precoComDesconto = precoEtiqueta - precoEtiqueta * 0.1;
  console.log(precoComDesconto.toFixed(2));
} else if (formaDePagamento === 2) {
  const precoComDesconto = precoEtiqueta - precoEtiqueta * 0.15;
  console.log(precoComDesconto.toFixed(2));
} else if (formaDePagamento === 3) {
  const precoComDesconto = precoEtiqueta;
  console.log(precoComDesconto.toFixed(2));
} else {
  const precoComDesconto = precoEtiqueta + (precoEtiqueta * 0.1)
  console.log(precoComDesconto.toFixed(2));
}