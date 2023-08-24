' use strict'
/* 1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico. Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.*/

const numeroJuego = Math.floor(Math.random() * 250);

const input = document.getElementById("input-numero-juego");
const button = document.getElementById("button-numero-juego");

const adivinarNumero = () => {
    const valorUsuario = input.value;

    if (isNaN(Number(valorUsuario))){
        alert("Por favor, ingrese un número dentro del rango establecido");
        return;
    }
    
    if(numeroJuego === Number(valorUsuario)){
        alert(`¡Muy bien, FELICIDADES! 👏👏👏  Ganaste, el número secreto era: ${numeroJuego}`)
        return;
    }

    if(numeroJuego > valorUsuario){
        alert(`Sigue intentando, el número es aún más grande`)
    } else{
        alert(`Sigue intentando, el número es menor que eso`)
    }
};

button.addEventListener('click', adivinarNumero);
button.addEventListener("keypress", adivinarNumero);