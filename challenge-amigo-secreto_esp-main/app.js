// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.



// Declaración del array para almacenar los nombres de amigos
let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value;
    
    // Validar que el campo no esté vacío
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    
    // Actualizar el array de amigos
    amigos.push(nombre);
    
    // Limpiar el campo de entrada
    inputAmigo.value = '';
    
    // Actualizar la lista visual
    mostrarAmigos();
    
    // Opcional: Mostrar mensaje de confirmación
    document.querySelector('h2').innerHTML = 'Amigo agregado correctamente';
}

// Función para mostrar los amigos en la lista HTML
function mostrarAmigos() {
    // Obtener el elemento de la lista
    const lista = document.getElementById('listaAmigos');
    
    // Limpiar la lista existente
    lista.innerHTML = '';
    
    // Iterar sobre el array de amigos
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento de lista para cada amigo
        const elementoLista = document.createElement('li');
        elementoLista.textContent = amigos[i];
        
        // Agregar el elemento a la lista
        lista.appendChild(elementoLista);
    }
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert('No hay amigos para sortear.');
        return;
    }
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado
    const listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = '';
    
    // Crear elemento para mostrar el resultado
    const elementoResultado = document.createElement('li');
    elementoResultado.textContent = 'El amigo sorteado es: ' + amigoSorteado;
    
    // Agregar a la lista de resultados
    listaResultado.appendChild(elementoResultado);
    
    // Registrar en consola para fines de depuración
    console.log(amigos);
    console.log(`El nombre elegido es: ${amigoSorteado}`);
}

// Función para limpiar un elemento (utilidad)
function limpiarCaja(selector) {
    const elemento = document.querySelector(selector);
    
    if (!elemento) return;
    
    if (elemento.tagName === 'INPUT') {
        elemento.value = '';
    } else {
        elemento.innerHTML = '';
    }
}