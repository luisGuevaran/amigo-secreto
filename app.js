// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista de nombres de amigos
const listaAmigos = [];

// Función para agregar amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    listaAmigos.push(nombre);
    mostrarLista();
    input.value = ''; // Limpia el campo de entrada
}

function mostrarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    listaAmigos.forEach((nombre, index) => {
        const li = document.createElement('li');
        li.classList.add('nombre-item');
        li.innerHTML = `
            <span class="nombre-texto">${nombre}</span>
            <span class="delete-btn" onclick="eliminarAmigo(${index})">❌</span>
        `;
        lista.appendChild(li);
    });
}


// Función para sortear un amigo
function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    if (listaAmigos.length === 0) {
        alert('Agrega al menos un nombre para hacer el sorteo.');
        return;
    }

    const indice = Math.floor(Math.random() * listaAmigos.length);
    const ganador = listaAmigos[indice];

    resultado.innerHTML = `<li>🎉 El amigo secreto es: <span class="ganador">${ganador}</span> 🎉</li>`;

}
function eliminarAmigo(index) {
    listaAmigos.splice(index, 1); // Elimina 1 elemento en la posición 'index'
    mostrarLista(); // Actualiza la lista visible

    // Si no queda nadie, también borramos el resultado
    if (listaAmigos.length === 0) {
        document.getElementById('resultado').innerHTML = '';
    }
}
// Función para limpiar la lista de amigos y el resultado
function limpiarLista() {
    listaAmigos.length = 0; // Vacía el arreglo
    mostrarLista(); // Limpia la lista visual
    document.getElementById('resultado').innerHTML = ''; // Limpia el resultado
}
