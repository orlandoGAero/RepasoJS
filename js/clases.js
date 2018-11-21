// "use strict" 
//Escribir una clase
class Tarea {
    constructor(nombre, prioridad) {
        this.nombre = nombre;
        this.prioridad = prioridad
    }
    imprimirTarea(){
        return `La tarea ${this.nombre} tiene una prioridad de ${this.prioridad}`;
    }
}

//crear los objetos
let tarea1 = new Tarea('Aprender React','Alta');
let tarea2 = new Tarea('Escuchar Musica','Baja');
let tarea3 = new Tarea('Hacer Ejercicio','Alta');
let tarea4 = new Tarea('Pasear Perro','Media');

console.log(tarea1.imprimirTarea());
console.log(tarea2.imprimirTarea());
console.log(tarea3.imprimirTarea());
console.log(tarea4.imprimirTarea());