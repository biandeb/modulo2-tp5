'use strict'
/* 6- Realizar una web con un temporizador donde el usuario pueda ingresar un tiempo desde donde comenzará a decrementar el contador. Debe contener los botones, iniciar, pausar y reset. */

let timerIntervalo;
let valorTiempo = 0;

const timeDisplay = document.getElementById('time-display');
const inputTiempo = document.getElementById('input-time');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

const startTemp = () => {
    if (timerIntervalo) return;

    valorTiempo = parseInt(inputTiempo.value);
    if (isNaN(valorTiempo) || valorTiempo <= 0) return;

    timerIntervalo = setInterval(updateTimer, 1000);
    updateTimer();
    inputTiempo.disabled = true;
}

const updateTimer = () => {
    if (valorTiempo <= 0) {
        clearInterval(timerIntervalo);
        timerIntervalo = null;
        inputTiempo.disabled = false;
        return;
    }

    const hours = Math.floor(valorTiempo / 3600);
    const minutes = Math.floor((valorTiempo % 3600) / 60);
    const seconds = valorTiempo % 60;

    timeDisplay.textContent = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    valorTiempo--;
}

const padZero = (num) => {
    return num.toString().padStart(2, '0');
}

const pauseTimer = () => {
    clearInterval(timerIntervalo);
    timerIntervalo = null;
    inputTiempo.disabled = false;
}

const resetTimer = () => {
    clearInterval(timerIntervalo);
    timerIntervalo = null;
    timeDisplay.textContent = '00:00:00';
    inputTiempo.value = '';
    inputTiempo.disabled = false;
}