'use strict';

// 1.ELEMENTOS DE HTML

const number = document.querySelector('.js_select');
const money = document.querySelector('.js_money');
const yourMoney = document.querySelector('.js_yourMoney');
const letsPlay = document.querySelector('.js_play');

//BOTÓN PLAY Y RESET
const buttonPlay = document.querySelector('.js_btn');
const resetButton = document.querySelector('.js_reset');

//DECLARACIÓN FUNCIONES

//1. FUNCIÓN NÚMERO ALEATORIO

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

// 2. FUNCIÓN NÚMERO SELECCIONADO / ACTUALIZACIÓN FRASES

function numberSelected() {
  const selectedNumber = parseInt(number.value);
  const numAleat = getRandomNumber(6);
  if (numAleat === selectedNumber) {
    letsPlay.innerHTML = 'Has ganado el doble de lo apostado 💃';
  } else {
    letsPlay.innerHTML = 'Has perdido lo apostado 🥴';
  }
}

//   //FUNCIÓN BONUS, ACTUALIZACIÓN DINERO (no me sale...., error NAN en moneyUpdate)

//  function moneyUpdate () {

//      const moneyDeb = parseInt(money.value);
//      const actualMoney = parseInt(yourMoney.value)

//      //copiar constantes función numberSelected (podría sacar ambas fuera??)

//      const selectedNumber = parseInt(number.value);
//      const numAleat = getRandomNumber(6);

//      if ( numAleat === selectedNumber) {

//         actualMoney.innerHTML = (moneyDeb * 2);
//      }

//     else {

//         actualMoney.innerHTML = (moneyDeb * 0);

//      }

//   }

//FUNCIÓN MANEJADORA

function handlePlay(event) {
  event.preventDefault();
  numberSelected();

  //  moneyUpdate ();
}

//FUNCIÓN RESET
function handleReset() {
  number.value = 'Que número apuestas del 1 al 6';
  letsPlay.innerHTML = 'Vamos a jugar!';
}

//EVENTO

buttonPlay.addEventListener('click', handlePlay);
resetButton.addEventListener('click', handleReset);
