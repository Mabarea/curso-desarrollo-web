# 🌐 Bitácora de Aprendizaje Backend: Nodo 01

## 📋 Introducción
El desarrollo Backend constituye el "motor" de una aplicación web. A diferencia del Frontend, que se centra en la interfaz y la experiencia del usuario (UI/UX), el Backend gestiona la lógica de negocio, la persistencia de datos y la comunicación directa con el sistema operativo y el hardware.

Este documento registra la configuración inicial y los conceptos fundamentales aprendidos durante la transición de JavaScript del navegador al entorno de servidor con **Node.js**.

---

## 🏗️ 1. Arquitectura y Organización del Proyecto
Para mantener un flujo de trabajo profesional y evitar el acoplamiento de código, se ha establecido una estructura de directorios que separa claramente las responsabilidades.

**Estructura del Repositorio:**
* `01-Frontend/`: Espacio dedicado al contenido oficial del Certificado de Profesionalidad (IFCD0110).
* `02-Backend/`: Entorno controlado para el desarrollo de la lógica de servidor con Node.js.
* `README.md`: Documentación raíz del proyecto.

---

## ⚙️ 2. El Entorno de Ejecución (Node.js)
Node.js no es un lenguaje independiente, sino un **entorno de ejecución (runtime)** basado en el motor V8 de Chrome que permite ejecutar JavaScript fuera del ecosistema del navegador.

### Conceptos Clave del Entorno Global
En el Backend, el ecosistema de objetos globales difiere del Frontend:
* **Abstracción del DOM:** Objetos como `window` o `document` no existen en Node.js.
* **Objeto `process`:** Proporciona control e información sobre el proceso actual de Node.js (arquitectura, plataforma y versión).
* **Inyección de Contexto:** Uso de constantes globales como `__dirname` (ruta absoluta del directorio actual) y `__filename` (ruta absoluta del archivo en ejecución).

---

## 📦 3. Gestión de Paquetes y Configuración (NPM)
Todo proyecto profesional en Node.js debe ser tratado como un paquete. Esto permite gestionar dependencias de terceros y configurar el comportamiento del proyecto.

### El Manifiesto: `package.json`
Este archivo actúa como el DNI del proyecto. Se inicializa mediante el gestor de paquetes de Node:
```bash
npm init -y