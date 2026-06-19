let a = 20;
let b = 30;

if (a != b) {
    console.log("São diferentes");
} 

else {
    console.log("são iguais");
}

// 1
const num = 3;

if (num > 0) {
    console.log("Número é positivo");
}

else {
    console.log("É negativo");
}

// 2
if (num % 2 == 0) {
    console.log("É par")
}

else {
    console.log("É ímpar")
}

// 3
const velocidade = 180;
console.log(typeof(velocidade))

if (velocidade > 80) {
    console.log("Multado!");
}

else {
    console.log("Velocidade segura.");
}

// 4
// if (a > b) {
//     console.log("A é maior que B.");
// }

// if (a < b) {
//     console.log("B é maior que A.");
// }

// else {
//     console.log("A e B são iguais.");
// }

// 5
const membro = true;

if (membro === true) {
    console.log("Tem direito a desconto!")
}

else {
    console.log("Valor integral.")
}

// 6
const year = 2047

if (year % 400 === 0 || (year % 4 == 0 && year % 100 !== 0)) {
    console.log("O ano é bissexto")
}

else {
    console.log("O ano não é bissexto")
}

// 7
const cadastroAtivo = "ativo";
const statusCadastro = cadastroAtivo === "ativo" ? true : false;
console.log(statusCadastro);

// 8


// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20