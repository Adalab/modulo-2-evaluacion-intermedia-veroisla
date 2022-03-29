"use strict";

// 1. Traer constantes

const number = document.querySelector(".js_select");
const money = document.querySelector(".js_money");
const button = document.querySelector(".js_btn");
const yourMoney = document.querySelector(".js_yourMoney");
//Frases
const play = document.querySelector(".js_play");
const double = document.querySelector(".js_double");
const lost = document.querySelector(".js_lost");


//DECLARACIÓN FUNCIONES


//1. Número aleatorio

function getRandomNumber(max) { 
    return Math.ceil(Math.random() * max); 
  } 


// 2. Número seleccionado, actualziación frase

function numberSelected() {

const selectedNumber = parseInt(number.value);
const numAleat = getRandomNumber(6);

    if ( numAleat === selectedNumber ) {

        play.classList.add("js_hidden");
        lost.classList.add("js_hidden");
        double.classList.remove("js_hidden");
    }

    else {
        
    play.classList.add("js_hidden");
    double.classList.add("js_hidden");
    lost.classList.remove("js_hidden"); 
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



//EVENTO 

  button.addEventListener('click', handlePlay)