# 📘 Resumen completo de etiquetas HTML

## 1) Estructura base del documento
- `<!doctype html>` → No es etiqueta, pero es obligatorio: activa el modo estándar.  
- `<html>` → Raíz del documento.  
- `<head>` → Metadatos (lo que no se ve en la página).  
- `<body>` → Contenido visible.

---

## 2) Metadatos (dentro de `<head>`)
- `<title>` → Título de la pestaña.  
- `<meta>` → Charset, viewport, descripción…  
- `<link>` → Enlaza recursos externos (CSS, iconos).  
- `<script>` → JavaScript interno o externo.  
- `<style>` → CSS embebido.  
- `<base>` → URL base para enlaces relativos.

---

## 3) Maquetación semántica
- `<header>` → Cabecera de página o sección.  
- `<nav>` → Zona de navegación.  
- `<main>` → Contenido principal (solo uno).  
- `<section>` → Sección temática.  
- `<article>` → Contenido independiente.  
- `<aside>` → Contenido relacionado/lateral.  
- `<footer>` → Pie de página.  
- `<address>` → Info de contacto del autor/organización.

### Contenedores genéricos
- `<div>` → Contenedor en bloque.  
- `<span>` → Contenedor en línea.

---

## 4) Títulos y texto básico
- `<h1>`…`<h6>` → Títulos jerárquicos.  
- `<p>` → Párrafo.  
- `<br>` → Salto de línea.  
- `<hr>` → Separador temático.  
- `<pre>` → Texto preformateado.  
- `<blockquote>` → Cita en bloque.  
- `<q>` → Cita corta en línea.

---

## 5) Énfasis y semántica de texto (inline)
- `<strong>` → Importancia.  
- `<em>` → Énfasis.  
- `<mark>` → Resaltado.  
- `<small>` → Nota o letra pequeña.  
- `<s>` → Contenido no válido (tachado).  
- `<sub>` / `<sup>` → Subíndice / superíndice.  
- `<code>` → Código en línea.  
- `<pre><code>` → Código en bloque.  
- `<kbd>` → Entrada de teclado.  
- `<samp>` → Salida de programa.  
- `<var>` → Variable.  
- `<abbr>` → Abreviatura.  
- `<cite>` → Título de obra.  
- `<time>` → Fecha/hora (mejor con `datetime`).  
- `<data>` → Valor machine-readable.  
- `<bdi>` / `<bdo>` → Direccionalidad de texto.  
- `<ruby>` / `<rt>` / `<rp>` → Anotaciones (furigana).  
- `<wbr>` → Punto de corte de palabra.

---

## 6) Enlaces y navegación
- `<a>` → Enlace o ancla `#id`.

---

## 7) Listas
- `<ul>` → Lista no ordenada.  
- `<ol>` → Lista ordenada.  
- `<li>` → Elemento de lista.  
- `<dl>` → Lista de definiciones.  
- `<dt>` → Término.  
- `<dd>` → Definición.

---

## 8) Imágenes y multimedia
- `<img>` → Imagen (alt obligatorio).  
- `<figure>` → Bloque agrupado.  
- `<figcaption>` → Pie de figura.  
- `<picture>` → Imágenes responsive.  
- `<source>` → Fuente alternativa.  
- `<audio>` → Audio.  
- `<video>` → Vídeo.  
- `<track>` → Subtítulos/captions.

---

## 9) Tablas
- `<table>` → Tabla.  
- `<caption>` → Título.  
- `<thead>` / `<tbody>` / `<tfoot>` → Cabecera/cuerpo/pie.  
- `<tr>` → Fila.  
- `<th>` → Celda de cabecera.  
- `<td>` → Celda normal.  
- `<colgroup>` / `<col>` → Definir columnas.

---

## 10) Formularios
- `<form>` → Formulario.  
- `<label>` → Etiqueta asociada a un campo.  
- `<input>` → Campo (text, email, number, checkbox, radio…).  
- `<textarea>` → Texto multilínea.  
- `<select>` → Desplegable.  
- `<option>` → Opción.  
- `<optgroup>` → Grupo de opciones.  
- `<button>` → Botón.  
- `<fieldset>` → Agrupar campos.  
- `<legend>` → Título del grupo.  
- `<datalist>` → Sugerencias para un input.  
- `<output>` → Resultado.  
- `<progress>` → Barra de progreso.  
- `<meter>` → Medidor.

---

## 11) Interacción / componentes
- `<details>` → Bloque desplegable.  
- `<summary>` → Título clickable.  
- `<dialog>` → Diálogo/modal nativo.

---

## 12) Embebidos y gráficos
- `<iframe>` → Incrustar página.  
- `<embed>` / `<object>` → Contenido incrustado.  
- `<param>` → Parámetros de `<object>`.  
- `<canvas>` → Dibujo por JS.  
- `<svg>` → Gráficos vectoriales.

---

## 13) Plantillas y Web Components
- `<template>` → Plantilla no renderizada.  
- `<slot>` → Hueco de contenido en Web Components.

---

## 14) “No me ejecutes nada, gracias”
- `<noscript>` → Contenido alternativo sin JS.
