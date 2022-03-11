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
        console.log(productos)
        const productoseleccionado = productos.find(producto => producto.id == selector)
        console.log(productoseleccionado)
    }

}
)

const agregarCarrito = (e) => {
    console.log("estamos aqui"+e.target)
}

