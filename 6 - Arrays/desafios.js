/*1) Crie um programa que dado um número imprima a sua tabuada.*/
/*
var numero = 7;

for (let index = 1; index <= 10; index++) {
    let tabuada = numero * index;
    console.log(tabuada);
}
*/
/* 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.*/
/*
const numeros = [19, 0, 11, 12, 45, 2, 3, 56, 5, 8, 9, 4, 75, 8];

for (let i = 0; i < numeros.length; i++) {
    const numerosPares = numeros[i];

    if (numerosPares % 2 === 0) {
        console.log(numerosPares);
    }

}
*/
/*3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".*/
/*
const listaNomes = ['Vitor', 'Lucas', 'Vania', 'Felippe', 'Vanessa', 'Soraya', 'Vilma', 'William', 'Vanusa'];

for (let i = 0; i < listaNomes.length; i++) {
    const nome1 = listaNomes[i];
    for (let index = 0; index < 1; index++) {
        const primeiraLetra = nome1[index];
            if (nome1[index] === 'V') {
                console.log(nome1);
            }

    }
}
*/
/*4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;*/
/*
for (let index = 10; index < 51; index++) {
    if (index % 2 === 0){
        console.log(index);
    }
}
*/
/*5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
   Ex de lista = [2, 7, 3, 8, 10, 4]*/
/*  const medias = [2, 7, 3, 8, 10, 4];
  
for (let index = 0; index < medias.length; index++) {
   const nota = medias [index];
   if (nota < 5){
       console.log(nota);
   }
}
*/

/*6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
   Ex de lista de notas = [2, 7, 3, 8, 10, 4]*/

const notas = [2, 7, 3, 8, 10, 4];
var maiorNota = 0;

for (let index = 0; index < notas.length; index++) {
    const nota1 = notas[index];
    if (maiorNota < nota1) {
        maiorNota = nota1;
    }
}   
console.log(maiorNota);