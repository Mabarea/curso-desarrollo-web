//'require' es la palabra mágica. El './' indica que el archivo está en la misma carpeta.
const herramientas = require('./utilidades');

const mensaje = herramientas.saludar("Miguel Ángel");
const fecha = herramientas.obtenerFecha();

console.log(mensaje);
console.log(`Hoy es día ${fecha}`);