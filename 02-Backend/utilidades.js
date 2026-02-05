//Estas funciones solo viven aquí dentro por ahora
function saludar(nombre) {
    return `Hola ${nombre}, bienvenido al servidor.`
}

function obtenerFecha() {
    return new Date().toLocaleDateString();
}

//Para que otros archivos puedan "ver" esto, debemos EXPORTARLO
module.exports = {
    saludar,
    obtenerFecha
}