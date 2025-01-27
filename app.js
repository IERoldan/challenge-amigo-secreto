let listaDeAmigos = [];

function pasarTexto(element, text) {
    let htmlElement = document.querySelector(element);
    htmlElement.innerHTML = text;
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function agregarAmigo() {
    let amigo = document.querySelector('#amigo').value.toUpperCase();
    let amigoFormateado = amigo
        .toLowerCase()
        .split(' ') // Divide la cadena en palabras
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
        .join(' '); // Une las palabras con un espacio

    if (amigoFormateado.length > 1) {
        listaDeAmigos.push(amigoFormateado);

        // Crear un nuevo elemento <li>
        let nuevoAmigo = document.createElement('li');
        nuevoAmigo.classList.add('amigo-item'); // Clase para el <li>

        // Crear un span para el texto del amigo
        let textoAmigo = document.createElement('span');
        textoAmigo.textContent = amigoFormateado;
        textoAmigo.classList.add('amigo-texto'); // Clase para el texto

        // Crear un botón para eliminar el amigo
        let botonEliminar = document.createElement('button');
        botonEliminar.innerHTML = '<i class="fas fa-trash"></i>'; // Icono de basura de FontAwesome
        botonEliminar.classList.add('boton-eliminar'); // Clase para el botón

        // Agregar evento al botón para eliminar el amigo
        botonEliminar.addEventListener('click', function() {
            let index = listaDeAmigos.indexOf(amigoFormateado);
            if (index !== -1) {
                listaDeAmigos.splice(index, 1); // Eliminar el amigo del array
                nuevoAmigo.remove(); // Eliminar el <li> del DOM
                actualizarEstadoBotonSorteo(); // Actualizar estado del botón de sorteo
            }
        });

        // Agregar el texto y el botón al <li>
        nuevoAmigo.appendChild(textoAmigo);
        nuevoAmigo.appendChild(botonEliminar);

        // Agregar el nuevo <li> al <ul> con el ID 'listaAmigos'
        let listaAmigos = document.querySelector('#listaAmigos');
        listaAmigos.appendChild(nuevoAmigo);

        console.log(listaDeAmigos);
        limpiarCaja();
        actualizarEstadoBotonSorteo(); // Actualizar estado del botón de sorteo

        // Restaurar el texto original del <h2> y eliminar la clase 'error'
        let h2 = document.querySelector('h2');
        h2.innerHTML = 'Digite el nombre <br class="hide-desktop">de sus amigos';
        h2.classList.remove('error');
        h2.classList.add('section-title'); // Asegurar que la clase 'section-title' esté presente
    } else {
        // Agregar la clase 'error' al <h2> para cambiar su color a rojo
        let h2 = document.querySelector('h2');
        h2.classList.add('error');
        h2.classList.remove('section-title'); // Eliminar la clase 'section-title' temporalmente
        pasarTexto('h2', '* Debes agregar un nombre válido');
    }
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        pasarTexto('#resultado', 'No hay amigos para sortear.');
        return;
    }

    // Seleccionar un índice al azar
    let indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indiceSorteado];

    // Eliminar el amigo sorteado del array
    listaDeAmigos.splice(indiceSorteado, 1);

    // Mostrar el resultado del sorteo en el elemento <ul id="resultado">
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = `<li>Tu amigo secreto es ${amigoSorteado}</li>`; // Mostrar solo el texto del amigo

    // Eliminar el <li> correspondiente al amigo sorteado del DOM
    let listaAmigos = document.querySelector('#listaAmigos');
    let items = listaAmigos.querySelectorAll('li');
    items.forEach((item) => {
        if (item.querySelector('.amigo-texto').textContent === amigoSorteado) {
            item.remove(); // Eliminar el <li> del DOM
        }
    });

    // Actualizar estado del botón de sorteo
    actualizarEstadoBotonSorteo();
}

function actualizarEstadoBotonSorteo() {
    let botonSorteo = document.querySelector('.button-draw');
    if (listaDeAmigos.length === 0) {
        botonSorteo.disabled = true; // Deshabilitar el botón si no hay amigos
    } else {
        botonSorteo.disabled = false; // Habilitar el botón si hay amigos
    }
}

// Inicializar el estado del botón de sorteo al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    actualizarEstadoBotonSorteo();
});