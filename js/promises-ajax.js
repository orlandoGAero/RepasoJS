const descargarUsuarios = cantidad => new Promise((resolve, reject) => {

    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    //llamado a ajax
    const xhr = new XMLHttpRequest();
    
    //abrir conexion
    xhr.open('GET', api, true);

    //onload
    xhr.onload = () => {

        if(xhr.status === 200){
            resolve(JSON.parse(xhr.responseText).results);
        } else {
            reject(Error(xhr.statusText));
        }
    }

    //opcional onerror
    xhr.onerror = error => reject(error);

    //send
    xhr.send();
});

descargarUsuarios(50).
                then(
                    miembros => imprimir(miembros),
                    error => console.error(
                        new Error('Hubo un error' + error)
                    )
                );

function  imprimir(usuarios){
    
    let html = ''; 
    
    usuarios.forEach(usuario => {
        console.log(usuario);
        let {first} = usuario.name;
        let {last} = usuario.name;
        let {nat} = usuario;
        let {large} = usuario.picture;
        html += `
            <div style="border: solid skyblue 5px; padding:15px; margin:2px; float: left">
                <p>Nombre: ${first} ${last}</p>
                <p>Pais: ${nat}</p>
                <p><img src="${large}"/></p>
            </div>
        `;
    });

    const divApp = document.querySelector("#app");
    divApp.innerHTML = html;
}