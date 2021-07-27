// VARIABLES
const original = ['Rojo', 'Verde', 'Azul', 'Amarillo'];
// -------
let indiceAmarillo = null;
let cantidadColoresConA = 0;
let arregloSinAzul = [];
let ordenadoPorCantidadLetras = [];
let arregloConNuevoColorInicio = [];
let arregloConNuevoColorFin = [];

// OPERACIONES
indiceAmarillo = original.indexOf('Amarillo');
cantidadColoresConA = original.filter(cantidadColoresConA => cantidadColoresConA.toLowerCase().includes('a')).length
arregloSinAzul = original.filter(color => color !== 'Azul');
ordenadoPorCantidadLetras = original.sort((colorA, colorB) => colorA.length - colorB.length)
arregloConNuevoColorInicio = ['Morado', ...original];
arregloConNuevoColorFin = [...original, 'Celeste'];

// RESULTADOS
console.log(indiceAmarillo);
console.log(cantidadColoresConA);
console.log(arregloSinAzul);
console.log(ordenadoPorCantidadLetras);
console.log(arregloConNuevoColorInicio);
console.log(arregloConNuevoColorFin);