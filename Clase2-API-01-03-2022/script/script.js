const API_URL = 'https://rickandmortyapi.com/api/character/?page=1';
const SEARCH_URL = 'https://rickandmortyapi.com/api/character/?name=';


const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

const getMovies = async (url) => {
    try {
        const res = await fetch(url)
        const data = await res.json()
        if (data.results.length === 0) {
            swal.fire({
                title: 'Error!',
                text: 'No se ha encontrado ninguna pelicula',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
        } else {
            showMovies(data.results)
        }
    } catch (error) {
        swal.fire({
            title: 'Error!',
            text: error,
            icon: 'error',
            confirmButtonText: 'Aceptar'
        })
    }
}
getMovies(API_URL);

const showMovies = (movies) => {
    main.innerHTML = '';
    movies.forEach(movie => {
        const { name, image, species, gender, status, location, origin } = movie;
        const movieDiv = document.createElement('div')
        movieDiv.classList.add('movie')
        movieDiv.innerHTML = `
        <div>
            <img src="${image}" alt="">
        </div>
        <div class="movie-info">
            <h1>${name}</h1>
            <h2>${gender}</h2>
            <h2>${status} - ${species}</h2>
            <h4>Ultima ubicación conocida:<h3>${location.name}</h3></h4> 
            <h4>Primera vez visto:<h3>${origin.name}</h3> </h4>
            
        </div>
        `
        main.appendChild(movieDiv)
    });
    console.log(movies);
}

form.addEventListener("submit", e => {
    e.preventDefault()

    const searchTerm = search.value.toLocaleLowerCase();

    if (searchTerm && searchTerm !== "") {
        getMovies(SEARCH_URL + searchTerm);
        search.value="";
    }
    else{
        swal.fire({
            title: 'Error!',
            text: 'Escriba algo en el cuadro de busqueda ',
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    }
})
