//Funciones de flecha

//***antes
// let viajando = function(destino){
//     return `Viajando a la ciudad de: ${destino}`;
// }

//con funciones de flecha

//con un solo parametro puedes omitir los ().
// y se puede omitir la palabra return y las {}
let viajando = destino => `Viajando a la ciudad de: ${destino}`;

let viaje;
viaje = viajando('Miami');

console.log(viaje);

//con dos parametros son necesarios los ()
let miViaje = (destino, dias) => {
    return `Viajando a la ciudad de: ${destino} por ${dias} dias`;
}

viaje = miViaje('CDMX',7);

console.log(viaje);