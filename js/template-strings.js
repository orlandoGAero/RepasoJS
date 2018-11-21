//Template Strings

const nombre = "Orlando";
const profesion = "Desarrollador Web";

//concatenar javascript

//****antes
console.log("Nombre: " + nombre + ", Profesión: " + profesion);

//****ahora
console.log(`Nombre: ${nombre}, Profesión: ${profesion}`);

//concatenar multiple lineas

//****antes
const contenedorApp = document.querySelector("#app");

// let html = "<ul>" + 
//                 "<li> Nombre: " + nombre + "</li>" +
//                 "<li> Profesión: " + profesion + "</li>" +
//             "</ul>";

//****ahora

let html = `
            <ul>
                <li>Nombre: ${nombre}</li>
                <li>Profesión: ${profesion}</li>
            </ul>
        `;

contenedorApp.innerHTML = html;