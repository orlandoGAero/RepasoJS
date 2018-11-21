//Object.keys

const persona = {
    nombre: "Orlando",
    profesion: "Desarrollador Web",
    edad: 25
}


let {nombre} = persona;

console.log(nombre);

//Acceder a las llaves de las propiedades del objeto
llaves = Object.keys(persona);
console.log(llaves);