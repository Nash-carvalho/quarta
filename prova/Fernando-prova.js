//1 Variaveis
let nome = "Fernando Nash"
let idade = 35

console.log ("meu nome é " +nome)
console.log ("tenho "    + idade +   " anos ")
// console.log(`meu nome é ${nome}`)

//2 condicionais
let nota = 4
if(nota >= 0 && nota <=4){
    console.log("reprovado")
}else if(nota >=5 && nota <=6 ){
    console.log("recuperação")
}else if(nota >=7 && nota <=10){
    console.log("aprovado")
}


//3 loop for
for (let i = 1; i <=21; i += 2) 
console.log(i) 




//4 Array
let frutas = ["banana","maça", "laranja","pera","uva"]
let contador = 1

for(let i = 0; i < frutas.length; i++) {
    console.log(`frutas ${i + 1} : ${frutas [i]}`)
}
