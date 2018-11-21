//importaciones por default no llevan ()
import  {
            mostrarTarea, 
            crearTarea,
            completarTarea,
            Tarea
        }  
from './export-import.js';

import ComprasPendientes from './export-import.js';

console.log( mostrarTarea );

let tarea = crearTarea('Nadar', 'Alta');
console.log( tarea );
completarTarea();

let tarea1 = new Tarea('Reparar Pc','Alta');
console.log(tarea1);
console.log(tarea1.imprimirTarea());

let compra1 = new ComprasPendientes('Comprar Auto','Media',3);
console.log(compra1);
console.log(compra1.imprimirTarea());
compra1.saludar();