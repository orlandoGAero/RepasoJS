//Objetos

//Object Literal

const persona = {
    nombre: "Orlando",
    apellido: "Reyes",
    profesion: "Desarrollador Web",
    edad: 25
};

console.log(persona);
console.log(persona['nombre']);
console.log(persona.apellido);
console.log(persona.profesion);
console.log(persona.edad);


//Object Construct
function Persona(nombre,apellido,profesion,edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.profesion = profesion;
    this.edad = edad;
}

let persona1 = new Persona('Sam','Perez','Ingeniera',28);
let persona2 = new Persona('Fany','Garcia','Ingeniera',25);
let persona3 = new Persona('Alfredo','Talavera','Portero',34);

console.log(persona1);
console.log(persona2);
console.log(persona3);