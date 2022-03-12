import getData from "./getdata.js"
import showData from "./showdata.js"

const urlproductos =  "https://ejemplo-backend.herokuapp.com/productos"
const divcards = document.getElementById("productContainer")
// registro de productos a agregados al carro
const registro = []

document.addEventListener("DOMContentLoaded",async () => {

    const datos = await getData(urlproductos)
    showData(datos,divcards)
}
)

// const agregarCarro = document.getElementById("botonCarro").addEventListener("click", () => {

//     registro.push(
//     {nombre :  nombre, 
//     cantidad : cantidad})
// }
// )

divcards.addEventListener("click", async (e) => {
    const btnImagen = e.target.classList.contains("btnimagen")
    const selector = e.target.id
    if (btnImagen) {
        const productos = await getData(urlproductos)
        const productoseleccionado = productos.find(producto => producto.id == selector)
        mostrarProducto(productoseleccionado,divcards)
    }
}
)

const mostrarProducto =async (producto,card) => {
    card.innerHTML= ""
    const productoseleccionado = await producto;
    console.log(productoseleccionado)
    const { name, precio, imagen, descripcion, id } = productoseleccionado;
    card.innerHTML += `
    <div> ${name} ${precio} 
    <a><img id=${id} class="btnimagen" src="${imagen[0]}" alt="imagen"></a>
    ${descripcion}</div>
    `;
}


const agregarCarrito = (e) => {
    console.log("estamos aqui"+e.target)
}

