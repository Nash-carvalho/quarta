

// 1 - Dado let valores = [3, 12, 8, 25, 7];, 
// faça um for que conte quantos valores são maiores 
// que 10 e imprima aquantidade.

let valores = [3, 12, 8, 25, 7]

let contador = 0 
for(let i = 0; i < valores.length; i++) {
    if ( valores [i] > 10){
        ++contador
    }
}
console.log(contador)

// 2 - Dado let notas = [7, 5, 6, 4, 8];, substitua todas
 //as notas menores
 //que 6 por 6 e imprima o array resultante. 

 let notas = [7, 5, 6, 4, 8];
 let menoresQueSeis = 0

 for (let i = 0; i < notas.length; i++ ){
    if( notas [i] < 6){
        notas[i]= 6
    }
 }
 console.log (notas)
 // exemplo 2
 let Nnotas = [7, 5, 6, 4, 8];
 let notasTrocadas = []

 for (let i = 0; i < Nnotas.length; i++ ){
    if (Nnotas [i] < 6) {
        notasTrocadas.push (6)
    }else{
        notasTrocadas.push(Nnotas[i])
    }
}
console.log(notasTrocadas)  // resposta [ 7, 6, 6, 6, 8 ]

// 3 - Dado let numeros = [1, 2, 3, 4, 5, 6, 7, 8];, 
// use um for para criar um novo array apenas com os
//  números pares.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8]
let numerosPares = []

for (let i = 0; i < numeros.length; i++)
    if(numeros [i] % 2=== 0 ){
        numerosPares.push(numeros[i])
        }
   console.log(numerosPares)  //resposta [ 7, 6, 6, 6, 8 ]

   // 4 Dado let numeros = [1, 2, 3, 4, 5, 6, 7, 8];, 
   // use um for para contar apenas com os números impares.

   let numerosS = [1, 2, 3, 4, 5, 6, 7, 8]
   let impares = []
   
   for (let i = 0; i < numerosS.length; i++)
    if(numerosS [i]  %2 !== 0) {
        impares.push(numerosS [i])
    }
    console.log( impares) // resposta [ 1, 3, 5, 7 ]

    // 5 - Dado let nomes = 
    // ["João", "Gabriela", "Ana", "Roberto"];, 
    // conte quantos nomes possuem mais de 5 letras 
    // e exiba o total.

let nomes = ["João", "Gabriela", "Ana", "Roberto", ]
let maisdeCinco = 0

for (let i = 0;  i < nomes.length; i++) {
    if (nomes [i] .length > 5){
        maisdeCinco++;
    }
}
console.log(maisdeCinco) //resposta 2

//6- Dado let saldos = [100, -20, 200, -30, 150];, faça um for
//  para somar apenas os valores positivos e exibir o resultado.

let saldos = [100, -20, 200, -30, 150];
let soma = 0

for (let i = 0; i < saldos.length; i++) {
    if (saldos [i] > 0) {
        soma += saldos [i]
    }
}
console.log(soma) // resposta 450