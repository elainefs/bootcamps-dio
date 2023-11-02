// Programa para calcular o valor de uma viagem
// Preço do combustível; tipo de combustível; gasto médio de combustível do carro por KM; distância em KM da viagem

const precoEtanol = 5.79;
const precoGasolina = 6.66
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Etanol'

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
  const valorGasto = litrosConsumidos * precoEtanol;
  console.log(valorGasto.toFixed(2))
} else {
  const valorGasto = litrosConsumidos * precoGasolina;
  console.log(valorGasto.toFixed(2))
}