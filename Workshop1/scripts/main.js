import getData from "./getdata.js"
import showData from "./showdata.js"

const urlproductos =  "https://ejemplo-backend.herokuapp.com/productos"
const divcards = document.getElementById("productContainer")
// registro de productos a agregados al carro
const registro = []


document.addEventListener("DOMContentLoaded",async () => {

    const datos = await getData(urlproductos)
    console.log(divcards)
    showData(datos,divcards)
}
)

//change

// const agregaracarro = document.getElementById("botonCarro").addEventListener("click", () => {

//     registro.push(
//     {nombre : ,
//     cantidad : })
// })
