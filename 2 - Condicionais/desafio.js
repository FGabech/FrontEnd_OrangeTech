/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem. */

const precoEtanol = 4.25;
const precoGasolina = 5.79;
let tipoCombustivel = 'Etanol';
const mediaKmPorLitros = 12;
const distanciaViagem = 100;

const litrosConsumidos =  distanciaViagem / mediaKmPorLitros;

if (tipoCombustivel === 'Etanol') {
    const valorViagem = litrosConsumidos * precoEtanol;
    console.log(valorViagem.toFixed(2));
}else{
    const valorViagem = litrosConsumidos * precoGasolina;
    console.log(valorViagem.toFixed(2));
}



