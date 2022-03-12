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
  sumar();
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
            <div id="carouselExampleIndicators" class="carousel slide" data-mdb-ride="carousel">
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-mdb-target="#carouselExampleIndicators"
                  data-mdb-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-mdb-target="#carouselExampleIndicators"
                  data-mdb-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-mdb-target="#carouselExampleIndicators"
                  data-mdb-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="${imagen[0]}" class="d-block w-100" alt="Wild Landscape"/>
                </div>
                <div class="carousel-item">
                  <img src="${imagen[1]}" class="d-block w-100" alt="Camera"/>
                </div>
                <div class="carousel-item">
                  <img src="${imagen[2]}" class="d-block w-100" alt="Exotic Fruits"/>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>

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
                <button id="btnComprar" data-mdb-target="#exampleModal" data-mdb-toggle="modal" class="btnComprar">Buy it Now</button>
            </div>
            <h3>${descripcion}</h3>
            <h4>Click for Sizing!</h4>
        </div>
    </div>
    `;


    const btnAgregar = document.getElementById('btnAgregar')
    btnAgregar.addEventListener('click', (e) => {
        registro.unshift(productoseleccionado)
        localStorage.setItem('productos', JSON.stringify(registro));
        sumar();
    });



    const btnCarrito = document.getElementById("carrito");
    btnCarrito.addEventListener('click', (e) => {
        sumar();
        const productosCarrito = JSON.parse(localStorage.getItem('productos'));
        const modalCarrito = document.getElementById("modalCarrito")
        modalCarrito.innerHTML = "";
        productosCarrito.forEach((product) => {
        const { name, precio, imagen } = product;
        modalCarrito.innerHTML += `
        <div class="cardContainerCarrito">
          <div class="cardsCarrito">
            <div class="imgCardCarrito">
              <img class="btnimagen" src="${imagen}" alt="imagen">
            </div>
            <div class="productoTagsContainer">
              <h2>${name}</h2>
              <h3>${precio}</h3>
            </div>
            <div class="btnRemoveContainer">
              <button class="btnRemove">Remove</button>
            </div>
          </div>
        </div>
        `;
      });
    })

    const btnComprar = document.getElementById('btnComprar');
      btnComprar.addEventListener('click', () => {
        btnAgregar.click();
        btnCarrito.click();
      }); 
};

const getLocalStorage = () => {
  let traerProductos = JSON.parse(localStorage.getItem('productos'));
  const modalCarrito = document.getElementById("modalCarrito")
    modalCarrito.innerHTML=""
    traerProductos.forEach((product) => {
      const { name, precio, imagen, id } = product;
      modalCarrito.innerHTML += `
        <div class="cardContainerCarrito">
          <div class="cardsCarrito">
            <div class="imgCardCarrito">
              <img class="btnimagen" src="${imagen}" alt="imagen">
            </div>
            <div class="productoTagsContainer">
              <h2>${name}</h2>
              <h3>${precio}</h3>
            </div>
            <div class="btnRemoveContainer">
              <button class="btnRemove">Remove</button>
            </div>
          </div>
        </div>
        `;
    }
  )}; 

  
  const sumar = () => {
    let traerProductos = JSON.parse(localStorage.getItem('productos'));
    let suma = 0;
    traerProductos.forEach((product) => {
      const {precio} = product;
      const precioNuevo = Number(precio.replace("$ ", ""))
      suma += precioNuevo
      console.log(suma) 
  })
  document.getElementById("total").innerHTML = `$${suma}`;
}
