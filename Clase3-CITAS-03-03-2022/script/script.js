let formulario = document.getElementById("formulario");
let citas = [];


formulario.addEventListener("submit", e => {
    e.preventDefault()
    capturaDatos();
});



const capturaDatos = () => {
    let nombre = document.getElementById("nombre").value;
    let hora = document.getElementById("hora").value;
    let fecha = document.getElementById("fecha").value;
    let sintomas = document.getElementById("sintomas").value;
    

    if (nombre == "" || hora == "" || fecha == "" || sintomas == "") {
        window.alert("Rellene todos los datos del formulario")
    } else {
        
    let registrarCita = {
        id: Math.round(Math.random()*(100-1)+1),
        nombre,
        fecha,
        hora,
        sintomas
    }
    
    const key = JSON.parse(localStorage.getItem("citas"));
    if (key !== null) {
        key.unshift(registrarCita);
        localStorage.setItem("citas", JSON.stringify(key));
    }else{
        citas.unshift(registrarCita);
        localStorage.setItem("citas", JSON.stringify(citas))
    }
    getLocalStorage();}
}


//LISTAR CITAS
let listarCitas =  document.getElementById("listarCita");

const getLocalStorage = () => {
    listarCitas.innerHTML="";
    let  traerCitaLocalStorage = JSON.parse(localStorage.getItem("citas"));

    traerCitaLocalStorage.map( citas => {
        const {nombre, fecha, hora, sintomas, id} = citas;
        listarCitas.innerHTML +=`
            <td>${nombre}</td>
            <td>${fecha}</td>
            <td>${hora}</td>
            <td>${sintomas}</td>
            <td><button id="${id}" class="btn btn-danger">Delete</button></td>
        `
    })
}

//CARGAR EN EL DOM
document.addEventListener("DOMContentLoaded", getLocalStorage);


//BOTON BORRAR
listarCitas.addEventListener("click", e => {
    const btnDelete = e.target.classList.contains("btn-danger")
    const  id = e.target.id;
    const local = JSON.parse(localStorage.getItem("citas"))
    const buscar = local.find(data => data.id === Number(id))

    if (btnDelete) {
        local.forEach((element, index) => {
            if(element.id === buscar.id){
                local.splice(index, 1);
                localStorage.setItem("citas", JSON.stringify(local))
                getLocalStorage()
            }
        });
    }
})

//BUSQUEDA
let buscarNombre = document.getElementById("busqueda");
let btnBuscar = document.getElementById("btnBuscar");

btnBuscar.addEventListener("click", e => {
    e.preventDefault();
    let input = document.getElementById("inputBuscar").value;
    let data =  JSON.parse(localStorage.getItem("citas"));

    let filtro = data.filter(datos => datos.nombre.toLowerCase().includes(input.toLowerCase()));
    console.log(filtro);

    buscarNombre.innerHTML="";
    filtro.lenght === 0 
    ? 
    buscarNombre.innerHTML += `<div>El nombre ${input} no existe</div>` 
    :
    filtro.map(cita => {
        const {nombre, fecha, hora, sintomas} = cita;
        buscarNombre.innerHTML +=  `
            <div class="buscarNombre">
            <hr>
                <div>
                    <h1>${nombre}</h1>
                </div>
                <div>
                    <h3>${fecha}</h3>
                    <h3>${hora}</h3>
                </div>
                <div>
                    <h3>${sintomas}</h3>
                </div>
            </div>
            <hr>
        `
    })
})

const btnLimpiar = document.getElementById("btnLimpiar")

const limpiarDatos = () => {
    formulario.reset();
}



