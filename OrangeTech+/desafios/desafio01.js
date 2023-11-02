// Programa para calcular o valor de uma viagem
// Preço do combustível; gasto médio de combustível do carro por KM; distância em KM da viagem

const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaEmKm = 1580;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2))
