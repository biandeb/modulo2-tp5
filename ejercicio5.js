'use strict'
/* 5- Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar.*/

    let cronometro;
    let valorTiempo = 0;
    let intervalo;
    let valorCron = false;

    const display = document.getElementById("timer");
    const startButton = document.getElementById("startButton");
    const pauseButton = document.getElementById("pauseButton");
    const resetButton = document.getElementById("resetButton");

    const verTimerDisplay = () => {
      const horas = Math.floor(valorTiempo / 3600).toString().padStart(2, '0');
      const minutos = Math.floor((valorTiempo % 3600) / 60).toString().padStart(2, '0');
      const segundos = (valorTiempo % 60).toString().padStart(2, '0');
      display.textContent = `${horas}:${minutos}:${segundos}`;
    }

    const startTimer = () => {
      if (!valorCron) {
        valorCron = true;
        cronometro = Date.now() - valorTiempo * 1000;
        intervalo = setInterval(verTiempo, 1000);
        verButtons();
      }
    }

    const pauseTimer = () => {
      if (valorCron) {
        valorCron = false;
        intervaloCron(intervalo);
        verButtons();
      }
    }

    const resetTimer = () => {
      if (!valorCron) {
        valorTiempo = 0;
        verTimerDisplay();
        verButtons();
      }
    }

    const verTiempo = () => {
      const now = Date.now();
      valorTiempo = Math.floor((now - cronometro) / 1000);
      verTimerDisplay();
    }

    const verButtons = () => {
      startButton.disabled = valorCron;
      pauseButton.disabled = !valorCron;
      resetButton.disabled = valorCron;
    }

    startButton.addEventListener("click", startTimer);
    pauseButton.addEventListener("click", pauseTimer);
    resetButton.addEventListener("click", resetTimer);

    verButtons();