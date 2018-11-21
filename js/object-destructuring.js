//Object Destructuring o Destructuracion de objetos
//(Como extraes los valores de un objeto)

const aprenderJS = {
    version: {
        nueva: "ES6+",
        anterior: "ES5"
    },
    frameworks: ['Angular', 'VueJS', 'React']
}

//Destructuring es extraer valores de un objeto

// console.log(aprenderJS);

//version anterior
// let version = aprenderJS.version.nueva;
// let frame = aprenderJS.frameworks[2];

//Destructuring nueva forma
let {nueva: miNueva} = aprenderJS.version;
console.log(miNueva);

let {frameworks} = aprenderJS;

for(let i = 0; i < frameworks.length; i++){
    console.log(frameworks[i]);
}