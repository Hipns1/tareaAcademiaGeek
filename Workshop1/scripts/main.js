import getData from "./getdata.js"

const urlproductos =  "https://ejemplo-backend.herokuapp.com/productos"


document.addEventListener("DOMContentLoaded",async () => {
    const datos = await getData(urlproductos)
    console.log(datos)
}
)