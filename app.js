// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Arreglo que almacena los nombres
let amigos = [];

// Función para agregar nombres a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); 
    // Validación: El campo no debe estar vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);

    actualizarLista();

    input.value = "";
}

// Función para actualizar la lista de amigos en pantalla
function actualizarLista() {
    const listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = ""; 

    amigos.forEach((nombre) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        listaElement.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos dos amigos en la lista para realizar el sorteo.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    document.getElementById("listaAmigos").innerHTML = "";

    // Mostrar el resultado
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<li> El amigo secreto es: <strong>${amigoSecreto}</strong> </li>`;

    amigos = [];
}
