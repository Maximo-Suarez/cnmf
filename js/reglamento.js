fetch("../data.json")
    .then((res) => res.json())
    .then((data) => {
    cargar(data);
});


function cargar(data){
    delegados = data
    console.log(delegados)
}

function mostrar(elDelegadoDeLaProvincia) {
    let datosDelDelegado = delegados.find((x) => {return x.provincia === elDelegadoDeLaProvincia})
    let mostrador = document.getElementById("mostrador")
    mostrador.classList.add("bg-blanco")
    mostrador.innerHTML=" " //vacio lo q habia
    let contenedor = document.createElement("div")
    contenedor.classList.add("mostrador__contenedor")
    contenedor.innerHTML= `
    <p  class="contenedor__provincia">${datosDelDelegado.provincia}</p>
    <div class="contenedor__img"><img src="../images/${datosDelDelegado.img}" alt="${datosDelDelegado.nombre}, delegado de ${datosDelDelegado.provincia}"></div>
    <p class="contenedor__nombre">${datosDelDelegado.nombre}</p>
    <p class="contenedor__email">Email: ${datosDelDelegado.mail}</p>
    <p class="contenedor__telefono">Teléfono: ${datosDelDelegado.telefono}</p>
    `
    mostrador.prepend(contenedor)
    
}

let delegados 
let selector = document.getElementById("buscador")

