//Creando funciones

//Funcion Declaration
//- llamar funcion antes es correcto
saludar('Sam');

function saludar(nombre) {
    console.log(`Bienvenido ${nombre}`);
}

//- llamar funcion despues tambien es correcto
saludar('Orlando');

//Funcion Expression
// incorrecto llamar funcion antes

const cliente = function (nomCliente) {
    console.log(`Datos del cliente: ${nomCliente}`);
}

// correcto llamar funcion despues de inicializarla
cliente('Orlando');