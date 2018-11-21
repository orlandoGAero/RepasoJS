const persona = {
    nombre: "Orlando",
    apellido: "Reyes",
    profesion: "Desarrolador Web",
    edad: 25
}

//esta linea marca error porque no se puede usar esa funcion
// console.log(persona.mostrarInformacionTarea());

function Tarea(nombre, urgencia){
    this.nombre = nombre;
    this.urgencia = urgencia;
}

//crear prototype, una funcion esta atada a solo esa clase
Tarea.prototype.mostrarInformacionTarea = function () {
    return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`;
}

let tarea1 = new Tarea('Aprendiendo REACT','Urgente');
let tarea2 = new Tarea('Correr','Alta');


console.log(tarea1);
console.log(tarea1.mostrarInformacionTarea());
console.log(tarea2);
console.log(tarea2.mostrarInformacionTarea());