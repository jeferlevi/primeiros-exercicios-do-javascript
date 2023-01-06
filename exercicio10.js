//10-Exercicio: Faça um programa que imprima na tela se um nome é igual ao outro nome digitado.
//Porem os dois nomes devem estar em um objeto separado.




const Maria = {
    name:"Maria",
    age: 24,
    height:1.64,
    address:"Rua Alburinho numero 55",
    genre:"feminina"

}
const João = {
    name:"João",
    age:37,
    height:1.53,
    address:"Rua eucalipto numero 765",
    genre:"madculino"
}
console.log(Maria.name === João.name)