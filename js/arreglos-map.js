//arreglo y .map

let carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

console.log(carrito);

// esta es una una forma de agregar al html
let appDiv = document.querySelector("#app");

let html = '';

carrito.forEach(producto => {
    html += `<li>${producto}</li>`;
})

appDiv.innerHTML = html;

// forma con map
// map crea un nuevo arreglo
carrito.map(producto => {
    html += `<br><li>El producto es: ${producto}</li>`;
})

appDiv.innerHTML = html;

