/* 1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/
class Carro {
    marca;
    cor;
    combustivelPorKm;

    constructor(marca, cor, combustivelPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.combustivelPorKm = combustivelPorKm;
    }

    calcularGastoPercurso(distancia, precoCombustivel) {
        return distancia * this.combustivelPorKm * precoCombustivel;
    }
}

const uno = new Carro('Fiat', 'Prata', 1 / 12);

//console.log(uno.calcularGastoPercurso(70, 5));

/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / Math.pow(this.altura, 2);
    }
}

const jose = new Pessoa('Jose', 70, 1.75);

console.log(jose.calcularImc().toFixed(2));