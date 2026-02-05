//'require' es la palabra mágica. El './' indica que el archivo está en la misma carpeta.
const herramientas = require('./utilidades');

const mensaje = herramientas.saludar("Miguel Ángel");
const fecha = herramientas.obtenerFecha();

console.log(mensaje);
console.log(`Hoy es día ${fecha}`);


//LECTURA DE ARCHIVOS

const fs = require('fs'); // Importamos el módulo nativo de archivos

console.log("1. El servidor inicia la lectura...");

//Leamos el archivo de forma ASÍNCRONA
fs.readFile('datos.txt', 'utf-8', (error,contenido) => {
    if (error) {
        console.error("Hubo un fallo al leer:", error);
        return;
    }
    console.log("2. Contenido del archivo:", contenido);
});

console.log("3. El servidor sigue trabajando mientras se lee el archivo.");