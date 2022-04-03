'use strict';

// 1.ELEMENTOS DE HTML

const number = document.querySelector('.js_select');
const moneyBet = document.querySelector('.js_money');
const yourMoney = document.querySelector('.js_yourMoney');
const letsPlay = document.querySelector('.js_play');
const numberComputer = document.querySelector('.js_numberComputer');

//BOTÓN PLAY Y RESET
const buttonPlay = document.querySelector('.js_btn');
const resetButton = document.querySelector('.js_reset');
let moneyValue = 50; //

//DECLARACIÓN FUNCIONES

// FUNCIÓN NÚMERO ALEATORIO

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

// FUNCIÓN STOP GAME SI SALDO ES 0 O 200

function stopGame() {
  if (moneyValue <= 0 || moneyValue >= 200) {
    resetButton.classList.remove('hidden');
    buttonPlay.classList.add('hidden');
  }
  if (moneyValue <= 0) {
    letsPlay.innerHTML = 'No has tenido suerte, ha ganado el ordenador! ';
  }
  if (moneyValue >= 200) {
    letsPlay.innerHTML = 'Ganaste la partida!!';
  }
}

//  FUNCIÓN NÚMERO SELECCIONADO / ACTUALIZACIÓN FRASES

function numberSelected(selectedNumber, numAleat) {
  // tengo que pasar estos parámetros (selectedNumber, numAleat) ya que las constantes no están definidas dentro de esta función, aunque también podría meterlas en esta función y por lo tanto no las tendría que pasar como parámetro.
  const moneyToPlay = parseInt(moneyBet.value); //constante moneyValue = dinero apostado por la usuaria

  if (numAleat === selectedNumber) {
    letsPlay.innerHTML = 'Has ganado el doble de lo apostado 💃';
    moneyValue = moneyToPlay * 2 + moneyValue;
    // mi variable es = el dinero que apueste la usuaria * 2 + el valor que ya tenía
  } else {
    letsPlay.innerHTML = 'Has perdido lo apostado 🥴';
    moneyValue = moneyValue - moneyToPlay; // mi variable = 50 - el dinero apostado
  }
  yourMoney.innerHTML = `Saldo: ${moneyValue}`; //pinto en el html, con el valor de la variable moneyValue
  numberComputer.innerHTML = `El ordenador ha sacado el número: ${numAleat}`; //Frase que me diga cúanto ha apostado el ordenador.
  stopGame(); // cada vez que apueste el usuario tengo que pasar esta función para ver si cumple la condición de 0 o 200
}

//FUNCIÓN MANEJADORA

function handlePlay(event) {
  event.preventDefault();
  const selectedNumber = parseInt(number.value); //constante selectedNumber = número que elige la usuaria
  const numAleat = getRandomNumber(6);
  numberSelected(selectedNumber, numAleat);
}

//FUNCIÓN RESET

function handleReset(event) {
  event.preventDefault();
  resetButton.classList.add('hidden');
  buttonPlay.classList.remove('hidden');
  number.value = 'Que número apuestas del 1 al 6';
  letsPlay.innerHTML = 'Vamos a jugar!';
  moneyValue = 50;
  yourMoney.innerHTML = 'Saldo: 50';
  numberComputer.innerHTML = ''; // No muestro la frase el ordenador ha apostado....
  moneyBet.value = '';
}

//EVENTOS

buttonPlay.addEventListener('click', handlePlay);
resetButton.addEventListener('click', handleReset);
