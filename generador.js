const evaluadorEdad = require("./evaluador");
const fs = require("fs");

const misDatos = {
    nombre:"Gianela Colina",
    edad:21,
};

function generadorDatos({nombre, edad}) {
    const status = evaluadorEdad(edad);
    return `Nombre: ${nombre}\nEdad: ${edad}\nStatus: ${status}`;
}

fs.writeFileSync("info.txt", generadorDatos(misDatos));

console.log("Datos guardados correctamente en info.txt");

