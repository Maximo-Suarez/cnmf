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
    contenedor.classList.add("mostrador__contenedor", "row")
    contenedor.innerHTML= `
    <p  class="contenedor__provincia col-12">${datosDelDelegado.provincia}</p>
    <div class="contenedor__img col-4"><img src="../images/${datosDelDelegado.img}" alt="${datosDelDelegado.nombre}, delegado de ${datosDelDelegado.provincia}"></div>
    <p class="contenedor__nombre col-6">${datosDelDelegado.nombre}</p>
    <p class="contenedor__email col-10">Email: ${datosDelDelegado.mail}</p>
    <p class="contenedor__telefono col-10">Teléfono: ${datosDelDelegado.telefono}</p>
    `
    mostrador.prepend(contenedor)
    
}

let delegados 
let selector = document.getElementById("buscador")

