fetch("../data.json")
    .then((res) => res.json())
    .then((data) => {
    pregunta(data);
});

let buscador = document.getElementById("buscador")

function aviso() {
    console.log("aviso")
    let mostrador = document.getElementById("mostrador").innerHTML
    let parrafo = document.createElement("p")
    parrafo.innerText("Seleccioná una provincia")
    mostrador.appendChild(parrafo)
}
function inicio(data) {
    let provincia = buscador.value
}
function pregunta(data) {
    buscador.value = ""? aviso(): inicio(data);
}
