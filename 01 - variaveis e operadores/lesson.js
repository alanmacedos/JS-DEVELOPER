// 1
let nome = "alan"
console.log(nome)

// 2
const pi = 3.141519

// 3
// Dará erro, porque variáveis do tipo const não podem ser reatribuídas

// 4
let age = 17
console.log(age)

// 5
let estaChovendo = true
console.log(estaChovendo)

// 6
const preco = 45.99
console.log(typeof (preco))
// number

// 7
let cidade = "Lisboa"
console.log(typeof (cidade))
// string

// 8
// let x;
// console.log(typeof (x))
// é "undefined" ou seja: tipo indefinido; e ainda não armazena nehum valor 


// 9
const computador = {
    marca: "apple",
    memoriaRAM: 16,
};

// 10
const cores = [
    "Azul",
    "Amarelo",
    "Branco",
];

console.log(cores)

// 11
// var tem tem escopo global ou de função, ignorando blocos de chaves e let tem limite das chaves onde foi criada, sendo assim, só existindo dentro das chaves

// 12
// variáveis do tipo const não podem ser reatribuídas

// 13
// false

// 14
const meuBigInt = BigInt(4295724093525097826879878758758673445362424131010384729124381098372408728n)
console.log(typeof (meuBigInt))

// 15
const saudacao = (nome) => {
    return "olá " + nome;

}

console.log(saudacao("Alan"));

// 16
var x = 10;

if (true) {
    var x = 20;
}

console.log(x)
// será impresso: 20

// 17
let y = 10;

if (true) {
    let y = 20;
}

console.log(y)
// será impresso: 10

// 18
const carro = {
    ano : 2020,
    modelo : "sedan",
};

carro.ano = 2024;
console.log(carro.ano);
// é possível sim porque objetos são mutáveis por padrão

// 19
const objetos = ["alan", 17, true];
console.log(objetos);

// 20
const myName = "Alan";

console.log(`Olá ` + myName);