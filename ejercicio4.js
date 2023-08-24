'use strict'
/* 4- Crear una web con un reloj que muestre información sobre la fecha, año y hora.*/

const mostrarReloj = () => {
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembree'];
  
    const ahora = new Date();
    const diaSemana = diasSemana[ahora.getDay()];
    const diaMes = ahora.getDate();
    const mes = meses[ahora.getMonth()];
    const anio = ahora.getFullYear();
    const horas = ahora.getHours();
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();
  
    const mostrarFecha = `Hoy es ${diaSemana} ${diaMes} de ${mes} del año ${anio},`;
    const mostrarTiempo = `con una hora de ${horas.toString().padStart(2, '0')}:
                        ${minutos.toString().padStart(2, '0')}:
                        ${segundos.toString().padStart(2, '0')}`;
  
    document.getElementById("clock").textContent = `${mostrarFecha} ${mostrarTiempo}`;
  }
  
  setInterval(mostrarReloj, 1000);
  mostrarReloj();
  

