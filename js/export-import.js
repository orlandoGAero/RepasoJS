//exportar variables
export const mostrarTarea = 'Saludar al gato';
// export default mostrarTarea;

//exportar funciones
export const crearTarea = (tarea,urgencia) => {
    return `La tarea ${tarea} tiene una prioridad ${urgencia}`;
}

export const completarTarea = () => {
    console.log('Tarea completada');
}

//exportar una clase
//export class Tarea
export class Tarea {
    constructor(nombre, prioridad) {
        this.nombre = nombre;
        this.prioridad = prioridad
    }
    imprimirTarea(){
        return `La tarea ${this.nombre} tiene una prioridad de ${this.prioridad}`;
    }
}

export default class ComprasPendientes extends Tarea {
    constructor(nombre, prioridad, cantidad){
        super(nombre, prioridad);
        this.cantidad = cantidad;
    }
    imprimirTarea(){
        let otro = super.imprimirTarea();
        return `${otro} y la cantidad es de ${this.cantidad}` ;
    }
    saludar(){
        console.log('Bienvenido usuario');
    }
}