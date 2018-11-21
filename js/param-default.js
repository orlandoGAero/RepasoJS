//parametros por default en las funciones

//antes****
// function actividad(nombre, actividad){
//     console.log(`La persona ${nombre} esta realizando,
//      la actividad ${actividad}`);
// }

//nueva version

const actividad = function(nombre = "June", actividad = "Nada"){
    console.log(`La persona ${nombre} esta realizando,
     la actividad ${actividad}`);
}

actividad('Orlando','Aprender JS');
actividad('Sam','Bailando');
actividad();

//DUDA: que pasa si solo quiero declarar
// el segundo parametro y el primero que me muestre el que esta por default