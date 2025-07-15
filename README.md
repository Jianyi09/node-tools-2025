Titulo del Informe: Script Node.js – Actividad 4
Nombre de estudiante: Gianela Colina
Fecha: Julio 2025

📌 ¿Que hace el script?
Este script automatiza la creacion de un archivo info.txt que contiene información personalizada del usuario. Utiliza dos módulos:

-El módulo fs para escribir el archivo.
-Un módulo externo propio (evaluador.js) para determinar si el usuario es mayor o menor de edad según el valor ingresado.

El archivo se genera de forma automatica cuando se ejecuta generador.js desde la terminal.

📌 ¿Que aprendi de Node.js?
Durante esta actividad aprendi a:

-Ejecutar el script en la terminal.
-Usar modulos internos como fs para manipular archivos.
-Crear modulos externos personalizados y compartir funciones entre archivos usando require() y module.exports.
-Como plus, aprendi a crear funciones en JavaScript con el operador ternario.


📌 ¿Tuve errores o dificultades? ¿Como los resolvi?
Sí, algunas dificultades que enfrente fueron:

-Al ser aun novata en JavaScritp tuve muchos problemas de sintaxis.
-Node no estaba instalado: Al principio la terminal no reconocia el comando node. Lo resolvi instalando Node.js desde su pagina oficial.

📌 ¿Como lo ejecutaria en otra maquina?

-Instalar Node.js si aun no esta instalado.
-Copiar la carpeta node-tools que contiene los archivos:
    *generador.js
    *evaluador.js
-Abrir una terminal y navegar hasta esa carpeta:

cd /ruta/a/node-tools

Ejecutar el script principal:

bash
node generador.js
Verificar que el archivo datos.txt se haya generado correctamente.