' use strict'
/* 2- Crea una clase llamada Persona que diga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.
*/

// class Persona{
//     constructor(nombre, edad, DNI, sexo, peso, altura, anioNacim){
//     this.nombre = nombre;
//     this.edad = edad;
//     this.dni = dni;
//     this.sexo = sexo;
//     this.peso = peso;
//     this.altura = altura;
//     this.anioNacim = anioNacim;
// }

// mostrarGen(){
//     const generaciones = {
//         generacionZ: "Generación Z (1994-2010)",
//         generacionY: "Generación Y millennials (1981-1993).",
//         generacionX: "Generación X (1969-1980)",
//         babyBoom: "Baby Boomer (1949-1968)",
//         silentGeneration: "Los niños de la posguerra (1930-1948),
//         generacionAlfa: "Nacidos a partir del 2011",
//       };
    

document.addEventListener("DOMContentLoaded", function () {
  const mostrarGeneracionBtn = document.getElementById("mostrar-generacion");
  const esMayorEdadBtn = document.getElementById("es-mayor-edad");
  const resultado = document.getElementById("resultado");

  mostrarGeneracionBtn.addEventListener("click", function () {
    const anioNacimientoInput = document.getElementById("año-nacimiento");
    const anioNacimientoValue = anioNacimientoInput.value;

    if (!validarFormatoFecha(anioNacimientoValue)) {
      resultado.innerText =
        "Lo lamento, ingrese una información válida.";
      return;
    }

    const [dia, mes, año] = anioNacimientoValue.split("/");
    const anioNacimiento = parseInt(año);

    const generacionInfo = mostrarGeneracion(anioNacimiento);
    resultado.innerText = `Generación: ${generacionInfo.generacion}\n${generacionInfo.descripcion}`;
  });

  esMayorEdadBtn.addEventListener("click", function () {
    const edad = parseInt(document.getElementById("edad").value);
    resultado.innerText =
      edad >= 18 ? "La persona es mayor de edad." : "La persona no es mayor de edad.";
  });

  const validarFormatoFecha = (fecha) => {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    return regex.test(fecha);
  }

  const mostrarGeneracion = (anioNacimiento) => {
    if (anioNacimiento >= 1930 && anioNacimiento <= 1948) {
      return {
        generacion: "Silent Generation",
        descripcion: "Nacidos de 1930 a 1948.",
      };
    } else if (anioNacimiento >= 1949 && anioNacimiento <= 1968) {
      return {
        generacion: "Baby Boom",
        descripcion: "Nacidos de 1949 a 1968.",
      };
    } else if (anioNacimiento >= 1969 && anioNacimiento <= 1980) {
      return {
        generacion: "Generación X",
        descripcion: "Nacidos de 1969 a 1980.",
      };
    } else if (anioNacimiento >= 1981 && anioNacimiento <= 1993) {
      return {
        generacion: "Millennials",
        descripcion: "Nacidos de 1981 a 1993.",
      };
    } else if (anioNacimiento >= 1994 && anioNacimiento <= 2010) {
      return {
        generacion: "Generación Z",
        descripcion: "Nacidos de 1994 a 2010.",
      };
    } else if (anioNacimiento >= 2011) {
      return {
        generacion: "Generación Alfa",
        descripcion: "Nacidos a partir de 2011.",
      };
    } else {
      return {
        generacion: "No se pudo determinar",
        descripcion: "No se encontró una generación correspondiente.",
      };
    }
  }
});