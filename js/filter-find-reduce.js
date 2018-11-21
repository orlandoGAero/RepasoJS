//métodos en arreglo

let personas = [
    {nombre: 'Orlando', edad: 25, aprendiendo: 'React'},
    {nombre: 'Irving', edad: 25, aprendiendo: 'JavaScript'},
    {nombre: 'Sam', edad: 28, aprendiendo: 'PHP'},
    {nombre: 'Fany', edad: 25, aprendiendo: 'Java'},
    {nombre: 'Steve', edad: 35, aprendiendo: 'Angular'},
];

console.log(personas);

//mayores de 28 años

const mayores = personas.filter( persona => {
    return persona.edad > 28;
});

console.log(mayores);

//que esta aprendiendo sam
const sam = personas.find(persona => {
    return persona.nombre === 'Sam';
});

let {aprendiendo} = sam;
let {nombre} = sam;
console.log(`${nombre} esta aprendiendo ${aprendiendo}`);

//suma de edades
let total = personas.reduce((edadTotal, persona) => {
    return edadTotal + persona.edad;
}, 0);

console.log('Total Edades:', total);
console.log('Promedio Edades:', total / personas.length);