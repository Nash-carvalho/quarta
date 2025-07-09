function contarNegativos(arr) {
  let contador = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      contador++;
    }
  }
  return contador;
}

// Exemplo de uso:
const numeros = [5, -2, 0, -7, 3];
console.log(contarNegativos(numeros)); // Saída: 2

// Exemplo de uso:
const numeros = [5, -2, 0, -7, 3];
console.log(contarNegativos(numeros)); // Saída: 2crie





// explicação
 
 function verificarIdade (idade) {
    if (idade >=18){
        console.log( "acesso permitido")
    } else {
        console.log("acesso negado")
    }
 }
verificarIdade (45)

//1. Crie uma função chamada mostrarDica()
//  que imprima a seguinte frase:
//“Lembre-se de salvar seu código com frequência!”

function mostrarDica () {
    var mensagem = "lembre-se de salvar seu codigo!"
    console.log(mensagem)
}
mostrarDica()

//2. Crie uma função chamada contarAteCinco()
//  que exiba os números de 1 até 5, um por linha.
//Dica: Use um loop for.

function contarAteCinco (){
    for( let i = 1; i <=5; i++ ){
console.log(i)}
    }
    contarAteCinco()


//3. Crie uma função chamada mostrarData() 
// que mostre a data atual no console.
//Dica: Use new Date() e console.log().

function mostrarData() {
    console.log (new Date()
.toLocaleString ( 'pt-Br', {
    timeZone: 'america/sao_paulo'
}))
}
mostrarData()


//Crie uma função chamada cumprimentar(nome) que exiba:
//"Olá, [nome]!"
//Exemplo: cumprimentar("Lucas") → "Olá, Lucas!"

function cumprimentar(nome) {
    var mensagem = `Olá ${nome}!`;
    console.log(mensagem);
}

cumprimentar("rafael");
