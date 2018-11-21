//funciones en un objeto

const persona = {
    nombre: "Orlando",
    profesion: "Ingeniero en Tic's",
    edad: 25,
    //antes
    // imprimirInfo: function(){
    //     console.log(`${this.nombre} es ${this.profesion} y su edad es ${this.edad} años`);
    // }

    //ahora
    imprimirInfo() {
        console.log(`${this.nombre} es ${this.profesion} y su edad es ${this.edad} años`);
    }
}

persona.imprimirInfo();