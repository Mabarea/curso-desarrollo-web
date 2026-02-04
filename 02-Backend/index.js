// En el Frontend usarías 'window.console', aquí es solo 'console'
console.log("=== INICIO DEL PROCESO DE NODE ===");

// El objeto 'process' nos da información del sistema operativo
// Esto no se puede hacer desde un navegador por seguridad
console.log("Hola Miguel Ángel.");
console.log("Estás ejecutando Node en la plataforma: " + process.platform);
console.log("La versión de tu motor es: " + process.version);

// Podemos medir cuánto tarda en ejecutarse nuestro código
const tiempoInicio = Date.now();

setTimeout(() => {
    const tiempoFin = Date.now();
    console.log(`Este mensaje ha tardado ${tiempoFin - tiempoInicio}ms en aparecer.`);
    console.log("=== FIN DEL PROCESO ===");
}, 1000);