# ⚙️ Guía de Aprendizaje Backend: Nodo 02

## 📋 Introducción
El segundo hito del aprendizaje se centra en la **modularización** y el manejo de operaciones de entrada/salida (I/O). Se introduce el concepto de **Asincronía**, pilar fundamental que permite a Node.js gestionar múltiples tareas simultáneamente sin bloquear el hilo principal de ejecución.

---

## 🧩 1. Sistema de Módulos (CommonJS)
Para mantener un código limpio y escalable, Node.js utiliza el sistema de módulos CommonJS. Cada archivo se trata como una unidad aislada.

### Exportación e Importación
* **`module.exports`**: Objeto que define qué funciones o variables serán accesibles desde otros archivos.
* **`require()`**: Función utilizada para importar módulos (ya sean archivos locales o módulos nativos).

**Ejemplo de flujo:**
1. Definir lógica en `utilidades.js`.
2. Exportar mediante `module.exports`.
3. Consumir en `index.js` mediante `require('./utilidades')`.

---

## 📂 2. Módulos Nativos: File System (`fs`)
Node.js incluye una librería estándar para interactuar con el sistema de archivos del servidor.

### `fs.readFile()`
Es la función para leer contenido de archivos. Requiere tres parámetros principales:
1. **Ruta**: Ubicación del archivo (ej. `'datos.txt'`).
2. **Codificación**: Formato del texto (ej. `'utf-8'`).
3. **Callback**: Función que se ejecuta al finalizar la lectura, gestionando el `error` o el `contenido`.

---

## ⚡ 3. El Concepto de Asincronía
Node.js utiliza un modelo de **I/O no bloqueante**. 
* Mientras el sistema operativo realiza una tarea lenta (como leer un disco duro), Node continúa ejecutando las líneas de código siguientes.
* El resultado de la tarea lenta se procesa una vez finalizada a través de una función de "retorno" o **Callback**.

---

## 🛠️ 4. Glosario Técnico de Comandos
| Comando | Función |
| :--- | :--- |
| `git add --all` | Añade todos los cambios de todo el repositorio al área de preparación. |
| `require('fs')` | Importa el módulo nativo de sistema de archivos. |
| `JSON.parse()` | Convierte una cadena de texto (string) en un objeto JavaScript (útil para archivos .json). |