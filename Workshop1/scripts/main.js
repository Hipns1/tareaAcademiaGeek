import getData from './getdata.js';
import showData from './showdata.js';

const urlproductos = 'https://ejemplo-backend.herokuapp.com/productos';
const divcards = document.getElementById('productContainer');
const divProductos = document.getElementById('mostrarSeleccionado');
// registro de productos a agregados al carro
const registro = [];

document.addEventListener('DOMContentLoaded', async () => {
  const datos = await getData(urlproductos);
  showData(datos, divcards);
  getLocalStorage();
});

divcards.addEventListener('click', async (e) => {
  const btnImagen = e.target.classList.contains('btnimagen');
  const selector = e.target.id;
  if (btnImagen) {
    const productos = await getData(urlproductos);
    const productoseleccionado = productos.find(
      (producto) => producto.id == selector
    );
    mostrarProducto(productoseleccionado, divProductos);
  }
});

const mostrarProducto = async (producto, card) => {
  card.innerHTML = '';
  const productoseleccionado = await producto;
  console.log(productoseleccionado);
  const { name, precio, imagen, descripcion, id } = productoseleccionado;
  document.getElementById('bannerContainer').style.display = 'none';
  card.innerHTML += `
    <div class="detailContainer">
        <div class="carrouselDetail">
            <a><img class="btnimagen" src="${imagen[0]}" alt="imagen"></a>
            <a><img class="btnimagen" src="${imagen[1]}" alt="imagen"></a>
            <a><img class="btnimagen" src="${imagen[2]}" alt="imagen"></a>
        </div>
        <div class="imgPrincipalDetail">
            <a><img class="btnimagen" src="${imagen[0]}" alt="imagen"></a>
        </div>
        <div class="textDetail">
            <h1>${name}</h1>
            <h2>${precio} </h2>
            <h5>Size</h5>
            <form>
                <input type="radio" name="grupotallas" id="radio1">S
                <input type="radio" name="grupotallas" id="radio2">M
                <input type="radio" name="grupotallas" id="radio3">L
                <input type="radio" name="grupotallas" id="radio4">XL
                <input type="radio" name="grupotallas" id="radio5">XXL
            </form>
            <div class="btnDetail">
                <button id="btnAgregar"  class="btnAgregar">Add to Cart</button>
                <button id="btnComprar" class="btnComprar">But it Now</button>
            </div>
            <h3>${descripcion}</h3>
            <h4>Click for Sizing!</h4>
        </div>
    </div>
    `;

  const btnAgregar = document
    .getElementById('btnAgregar')
    .addEventListener('click', (e) => {
      registro.push(productoseleccionado);
      console.log({ registro });
      // getLocalStorage()
      localStorage.setItem('productos', JSON.stringify(registro));
    });

  const btnComprar = document
    .getElementById('btnComprar')
    .addEventListener('click', (e) => {
      console.log('hola');
    });
};

// const getLocalStorage = () => {
//   let traerProductos = JSON.parse(localStorage.getItem('productos'));
//   const key = JSON.parse(localStorage.getItem('citas'));
//   if (key !== null) {
//     key.unshift(registrarCita);
//     localStorage.setItem('citas', JSON.stringify(key));
//   } else {
//     citas.unshift(registrarCita);
//     localStorage.setItem('citas', JSON.stringify(citas));
//   }
//   console.log(traerProductos);
// };
