//Object Literal Enhacement

const dj = "Armin Van Buuren";
const genero = "Trance";
const canciones = [
    'Terapy',
    'Another you',
    'I need you'
];

//forma anterior
// let armin = {
//     dj : dj,
//     genero : genero,
//     canciones: canciones
// }

//forma nueva
let armin = {dj, genero, canciones};

console.log(armin);