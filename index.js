'use strict';

const display = document.getElementById('display');
const numeros = document.querySelectorAll('[id*=tecla]'); //qualquer elemento que tem tecla
const operadores = document.querySelectorAll('[id*=operadores]');


const atualizarDisplay = (texto) => {
    display.textContent += texto;
}
const inserirNumero = (evento) => {
    atualizarDisplay(evento.target.textContent)


}

numeros.forEach(numero => numero.addEventListener('click', inserirNumero));
operadores.forEach(operador => operador.addEventListener('click', selecionarOperador))