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


//Número aleatorio

function getRandomNumber(max) { 
    return Math.ceil(Math.random() * max); 
  } 


// Número seleccionado, actualziación frase

function numberSelected() {

    //número seleccionado
  const selectedNumber = parseInt(number.value);

    //generar número aleatorio
    
 const numAleat = getRandomNumber(6);
 console.log(numAleat);

    
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


//Función manejadora

function handlePlay(event) {

    event.preventDefault();

    numberSelected(); 

}

//Evento 

  button.addEventListener('click', handlePlay)