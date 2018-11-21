//spread operator (...), tarea mas comun: conbinar dos arreglos diferentes

let lenguajes = ['JavaScript', 'Java', 'Python'];
let frameworks = ['React', 'Spring', 'Django'];

// unir los arreglos en uno

// forma anterior
// let combinar = lenguajes.concat(frameworks);
// console.log(combinar);

//nueva forma
combinar = [...lenguajes,...frameworks];
console.log(combinar);

//---------otro uso copiar arreglos
//pero usando reverse invierte el arreglo
// let [ultimo] = lenguajes.reverse();
// console.log(ultimo);

//con spread operator
let[ultimo] = [...lenguajes].reverse();
console.log(ultimo);

console.log(lenguajes);

//-----un uso mas
function sumar(a,b,c){
    return `Suma: ${a+b+c}`;
}

let numeros = [1,2,3];
console.log(sumar(...numeros));