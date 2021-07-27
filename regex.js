// VARIABLES
const texto = 'Mar del Plata​ es una ciudad ubicada en el sudeste de la provincia de Buenos Aires';
let textoCensurado = null;

// OPERACIÓN
const regex = /\w/gi
textoCensurado = texto.replace(regex, 'X')

// RESULTADO
console.log(textoCensurado)