// VARIABLES
const originalA = {
    nombre: 'Sergio',
    edad: 28,
    preferidos: ['Pizza', 'Hamburguesa'],
    madre: {
        nombre: 'Sandra',
        edad: 54,
    },
};
const originalB = '{"nombre":"Damian","edad":26}';
// -------
let edadMadre = 0;
let objetoParseado = null;
let existeClaveMadreA = null;
let existeClaveMadreB = null;
let nombreDelMasJoven = null;
let clavesDelObjeto = [];

// OPERACIONES
edadMadre = originalA.madre.edad;
objetoParseado =  JSON.parse(originalB)
existeClaveMadreA = originalA.hasOwnProperty('madre');
existeClaveMadreB = originalB.hasOwnProperty('madre');
nombreDelMasJoven = originalA.edad < objetoParseado.edad ? originalA.nombre : objetoParseado.nombre;
clavesDelObjeto = Object.keys(originalA)

// RESULTADOS
console.log(edadMadre);
console.log(objetoParseado);
console.log(existeClaveMadreA);
console.log(existeClaveMadreB);
console.log(nombreDelMasJoven);
console.log(clavesDelObjeto);