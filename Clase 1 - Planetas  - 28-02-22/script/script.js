let nombrePlanetas = Array ("Mercurio", "venus", "Tierra", "Marte");
let distancia = ["5","3","67","100"];
const tamaño = [];

console.log(nombrePlanetas);
console.log(distancia);
console.log(tamaño);

for (let index = 0; index < nombrePlanetas.length ; index++) {
    console.log(nombrePlanetas[index]);
}

//Otro metedo para recorrer un array
/* for ( const planeta of nombrePlanetas){
    console.log(planeta)
} */

for (const key in distancia){
    if (distancia[key] =="5") {
        console.log("Se encontró la distancia")
    }else{
        console.log("No se encontró la distancia")
    }
}

nombrePlanetas.forEach((value, index, array) => {
    console.log("planeta", index, value)
});

let resultadoMap = nombrePlanetas.map((planetas, index) => {
    return(`El planeta ${planetas} tiene el tamaño de: ${distancia[index]}`)
});
console.log(resultadoMap)