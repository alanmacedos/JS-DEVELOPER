// let a = 20;
// let b = 30;

// if (a != b) {
//     console.log("São diferentes");
// } 

// else {
//     console.log("são iguais");
// }

// // 1
// const num = 3;

// if (num > 0) {
//     console.log("Número é positivo");
// }

// else {
//     console.log("É negativo");
// }

// // 2
// if (num % 2 == 0) {
//     console.log("É par")
// }

// else {
//     console.log("É ímpar")
// }

// // 3
// const velocidade = 180;
// console.log(typeof(velocidade))

// if (velocidade > 80) {
//     console.log("Multado!");
// }

// else {
//     console.log("Velocidade segura.");
// }

// // 4
// // if (a > b) {
// //     console.log("A é maior que B.");
// // }

// // if (a < b) {
// //     console.log("B é maior que A.");
// // }

// // else {
// //     console.log("A e B são iguais.");
// // }

// // 5
// const membro = true;

// if (membro === true) {
//     console.log("Tem direito a desconto!")
// }

// else {
//     console.log("Valor integral.")
// }

// // 6
// const year = 2047

// if (year % 400 === 0 || (year % 4 == 0 && year % 100 !== 0)) {
//     console.log("O ano é bissexto")
// }

// else {
//     console.log("O ano não é bissexto")
// }

// // 7
// const cadastroAtivo = "ativo";
// const statusCadastro = cadastroAtivo === "ativo" ? true : false;
// console.log(statusCadastro);

// 8
// const n = "bla";

// if (n.length == 0)
// {
//     console.log("string vazia");
// }

// else
// {
//     console.log(`A string ${n} tem ${n.length} caracteres`);
// }

// 9
// const temperatura = 16;

// if (temperatura < 15)
// {
//     console.log("Está frio!");
// }

// else if (temperatura >= 15 && temperatura <= 25)
// {
//     console.log("Clima agradável.");
// }

// else
// {
//     console.log("Está quente");
// }

// 10
// const mes = 5;

// if (mes >= 1 && mes <= 12)
// {
//     switch (mes) {
        // case 1:
        //     console.log("Janeiro");
        //     break;

//     }

//     switch (mes) {
//         case 2:
            // console.log("Fevereiro");
            // break;
//     }

//     switch (mes) {
//         case 3:
            // console.log("Março");
            // break;
//     }

//     switch (mes) {
//         case 4:
            // console.log("Abril");
            // break;
//     }

//     switch (mes) {
//         case 5:
            // console.log("Maio");
            // break;
//     }

//     switch (mes) {
//         case 6:
            // console.log("Junho");
            // break;
//     }

//     switch (mes) {
//         case 7:
            // console.log("Julho");
            // break;
//     }

//     switch (mes) {
//         case 8:
            // console.log("Agosto");
            // break;
//     }

//     switch (mes) {
//         case 9:
            // console.log("Setembro");
            // break;
//     }

//     switch (mes) {
//         case 10:
            // console.log("Outubro");
            // break;
//     }

//     switch (mes) {
//         case 11:
            // console.log("Novembro");
            // break;
//     }

//     switch (mes) {
//         case 12:
            // console.log("Dezembro");
            // break;
//     }
// }

// else 
// {
//     console.log("Valor inválido.")
// }

// 11
// const a = "";

// if (a == "")
// {
//     console.log("É indefinido.");
// }

// else
// {
//     console.log(`O tipo da variável é ${typeof(array)}`);
// }

// 12
// const n = 300;

// if (n % 3 == 0 && n % 5 == 0)
// {
//     console.log("É múltiplo");
// }

// else
// {
//     console.log("Não é múltiplo");
// }

// 13
// const password = "alauinha";

// if (password.length < 8)
// {
//     console.log("Senha muito fraca.")
// }

// else
// {
//     console.log("Senha forte.")
// }

// 14
// const prompt = require("prompt-sync")();
// const input = Number(prompt("Escolha uma opção: 1 - Água, 2 - Suco, 3 - Refri "));

// switch (input) {
//     case 1:
//         console.log("Água");
//         break;

//     case 2:
//         console.log("Suco");
//         break;

//     case 3:
//         console.log("Refri");
//         break;

//     default:
//         console.log("Opção inválida");
//         break;
// }

// 15
// const prompt = require("prompt-sync")();
// const input1 = Number(prompt("Insira um lado de triângulo "));
// const input2 = Number(prompt("Insira outro lado de triângulo "));
// const input3 = Number(prompt("Insira outro lado de triângulo "));

// if (input1 + input2 > input3)
// {
//     console.log("É um triângulo");
// }

// else
// {
//     console.log("Não é triângulo");
// }

// 16
// const prompt = require("prompt-sync")();
// const input1 = Number(prompt("Insira sua idade "));

// if (input1 < 2)
// {
//     console.log("É bebê");
// }

// else if (input1 < 12)
// {
//     console.log("É criança");
// }

// else if (input1 < 18)
// {
//     console.log("Adolescente");
// }

// else if (input1 <= 65)
// {
//     console.log("Adulto");
// }

// else
// {
//     console.log("Idoso");
// }

// 17
// const estaLogado = false;

// if (!estaLogado)
// {
//     console.log("Faça login");
// }

// else
// {
//     console.log("Você está logado");
// }

// 18
const prompt = require("prompt-sync")();

const input1 = Number(prompt("Nota 1: "));
const input2 = Number(prompt("Nota 2: "))
const input3 = Number(prompt("Nota 3: "))

const media = (input1 + input2 + input3) / 3;

if (media >= 7)
{
    console.log("Está aprovado");
}

else if (media > 5 && media < 6.9)
{
    console.log("Recuperação");
}

else
{
    console.log("Reprovado");
}

// 19
// 20