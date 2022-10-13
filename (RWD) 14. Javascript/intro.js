
/*
Comentário em bloco em Javascript
*/

//comentário em linha em Javascript

var nomeSistema = "Nome do Sistema";
let nome = "Alexander Gobbato Paulino Albuquerque"; //Aspas duplas
let nome2 = 'Alexander Gobbato Paulino Albuquerque'; //Aspas simples
let idade = 42;
let isProfessor = true;
const pi = 3.1416;

function teste() {
    let nomeSistema = "turma!";
    return nome;
}

function outroteste() {
    let conteudo = "bla bla bla";
    alert("Olá turma!");
}

function mostraPi() {
    alert(pi);
}

console.log(pi);
alert(pi);
console.log(pi + " " + typeof(pi));
console.log(nome + " " + typeof(nome));

let num1 = 5;
let num2 = 10;
console.log("Soma: " + num1 + num2); //vai concatenar
console.log("Soma: " + (num1 + num2)); //aqui fará a soma
console.log("Soma: " + num1 + "+" + num2 + " = " + (num1 + num2)); //concantenar e mostrar resultado da soma

document.write("<h1>Olá!</h1>")

function preencherNome() {
    let nome = document.getElementById('idNome').value;
    document.getElementById('idDiv').innerHTML = nome;
}