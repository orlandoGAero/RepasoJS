
const mostrarTarea = 'Saludar al gato';

//herencia de una clase
class Tarea {
    constructor(nombre, prioridad) {
        this.nombre = nombre;
        this.prioridad = prioridad
    }
    imprimirTarea(){
        return `La tarea ${this.nombre} tiene una prioridad de ${this.prioridad}`;
    }
}

class ComprasPendientes extends Tarea {
    constructor(nombre, prioridad, cantidad){
        super(nombre, prioridad);
        this.cantidad = cantidad;
    }
    imprimirTarea(){
        let otro = super.imprimirTarea();
        return `${otro} y la cantidad es de ${this.cantidad}` ;
    }
}

//crear los objetos
let tarea1 = new Tarea('Aprender React','Alta');
let tarea2 = new Tarea('Escuchar Musica','Baja');
let tarea3 = new Tarea('Hacer Ejercicio','Alta');
let tarea4 = new Tarea('Pasear Perro','Media');

// console.log(tarea1.imprimirTarea());
// console.log(tarea2.imprimirTarea());
// console.log(tarea3.imprimirTarea());
// console.log(tarea4.imprimirTarea());

//compras
let compra1 = new ComprasPendientes('Comprar Laptop','Urgente',1);
// console.log(compra1.imprimirTarea());