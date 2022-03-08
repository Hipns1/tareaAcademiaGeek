
let formulario = document.getElementById("formulario");
let btnBuscar = document.getElementById("btnCorreo");
let btnEliminar = document.getElementById("btnEliminar");
let btnEditar = document.getElementById("btnEditar");

let url = "https://ejemplo-backend.herokuapp.com/videojuegos/";

//OCULTAR ID
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('id').style.display = 'none';
    document.getElementById('idEdit').style.display = 'none';
})

//AGREGAR
formulario.addEventListener("submit", async e => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let precio = document.getElementById("precio").value;
    let imagen = document.getElementById("imagen").value;

    let resp = await fetch(url, {
        method: "POST", 
        body: JSON.stringify({
            nombre: name,
            precio: precio,
            imagen: imagen
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    });
    document.getElementById("formulario").reset()
})

//BUSCAR
btnBuscar.addEventListener("click", async () =>{
    
    document.getElementById('id').style.display = 'block';
    document.getElementById('idEdit').style.display = 'block';
    let email = document.getElementById("name").value;
    
    const imgUrl = document.getElementById("imagenCrud");

    let resp = await fetch(url);
    let data = await resp.json();

    let modificar = data.find(user => user.nombre.toLocaleLowerCase()
        .includes(email.toLocaleLowerCase()));
    
    const { nombre, precio, imagen, id } = modificar;
    imgUrl.innerHTML = `<img id="imgCrud" src="${imagen}" ></img>`
    document.getElementById('name').value = nombre;
    document.getElementById('precio').value = precio;
    document.getElementById('imagen').value = imagen;
    document.getElementById('id').value = id;
    document.getElementById("imgCrud").style.display= "block"
    
})

//EDITAR
btnEditar.addEventListener("click", async () => {
    document.getElementById("imgCrud").style.display= "none"
    let idModificar = document.getElementById("id").value;
    let nameModificar = document.getElementById("name").value;
    let precioModificar = document.getElementById("precio").value;
    let imagenModificar = document.getElementById("imagen").value;

    let resp = await fetch(url + idModificar, {
        method: "PUT", 
        body: JSON.stringify({
            id: idModificar,
            nombre: nameModificar,
            precio: precioModificar,
            imagen: imagenModificar
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    document.getElementById("formulario").reset()
})


//ELIMINAR
btnEliminar.addEventListener("click", async () => {
    document.getElementById("imgCrud").style.display= "none"
    let idEliminar = document.getElementById("id").value;
    await fetch(url+idEliminar, {
        method: "DELETE"
    })
    document.getElementById("formulario").reset();
})

