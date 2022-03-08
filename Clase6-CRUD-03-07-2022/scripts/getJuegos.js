let btnCategoria1 = document.getElementById("btnCategory1");
let btnCategoria2 = document.getElementById("btnCategory2");

const form = document.getElementById('form')

const apiUrl = "https://ejemplo-backend.herokuapp.com/videojuegos/";


const prueba = async (url ) => {
  
  //peticion
  const resp = await fetch(url);
  const data = await resp.json();
  getElementos(data)
}

prueba(apiUrl)


const getElementos = async (data) => {
    
   let mostrarElementos = document.querySelector(".grid-elementos");
    mostrarElementos.innerHTML= "";
    console.log(data);


    
   data.forEach(element => {
        const { nombre, precio, imagen } = element;
        mostrarElementos.innerHTML += `
        <div class="cards">
                <div class="cardStructure">                
                    <div class="imgContainer">
                      <img src="${imagen}" class="cardImg contentImg" alt="...">
                    </div>
                    <div class="cardOverlay">
                            <h5 class="cardtTitle">${nombre}</h5>
                            <h2>Disponible</h2>
                            <h1>Desde</h1>
                            <p class="precioText">$ ${precio}</p>
                    </div>
                </div>
        </div>
        `
   })
}
//getElementos();


form.addEventListener('submit', async e => {
  e.preventDefault();

  let mostrarElementos = document.querySelector(".grid-elementos");
  mostrarElementos.innerHTML= ''
  //peticion
  const resp = await fetch(apiUrl);
  const data = await resp.json();

 let busqueda = data.filter(juegos  => juegos.nombre.toLocaleLowerCase()
  .includes(search.value.toLocaleLowerCase()))
  console.log(busqueda);
 
 
 getElementos(busqueda)

})




//slider de video juegos


document.getElementById("slider").addEventListener("load", efecto());
function efecto() {
  var imagen_Arreglo = new Array();

  imagen_Arreglo[0] = new Image();
  imagen_Arreglo[0] =
 "https://i.ibb.co/ZSQKK1L/halo-infinite-social-851x315-fe6839494bc4483cbfca81adcee9841f.png"

  imagen_Arreglo[1] = new Image();
  imagen_Arreglo[1] =
  "https://i.ibb.co/fxd6NXW/sekirobanner.jpg";

  imagen_Arreglo[2] = new Image();
  imagen_Arreglo[2] =
  "https://i.ibb.co/5hmxR7J/Go-W-Header-01.jpg" ;


  imagen_Arreglo[3] = new Image();
  imagen_Arreglo[3] =
  "https://i.ibb.co/Q6XkDVh/sliverbanner-43-1.webp";
   
  imagen_Arreglo[4] = new Image();
  imagen_Arreglo[4] =
  "https://i.ibb.co/LSvL6Cs/fa22dbea-35e5-4df0-9387-a1aa76a30fb0-SR970-300.jpg";

  var contenidoImagenes = 0;

  function Slider() {
    document.slider.src = imagen_Arreglo[contenidoImagenes];

    if (contenidoImagenes < 4) {
      contenidoImagenes = contenidoImagenes + 1;
    } else {
      contenidoImagenes = 0;
    }
  }

  setInterval(Slider, 3000);
}