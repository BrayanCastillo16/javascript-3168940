import {comic} from  "./bd.js";

// ===== CARRUSEL AUTOMÁTICO =====
const principal = document.querySelector(".principal");
let i = 0;
const intervaloCarrusel = 4000; // Cambia cada 4 segundos

function mostrarImagen(i) {
    const imagenUrl = comic.carrusel[i].imagen;
    principal.style.backgroundImage = `url('${imagenUrl}')`;
}

function avanzarCarrusel() {
    i = (i + 1) % comic.carrusel.length;
    mostrarImagen(i);
}

// Mostrar primera imagen
mostrarImagen(i);

// Cambiar imagen automáticamente
setInterval(avanzarCarrusel, intervaloCarrusel);
// ===== FIN CARRUSEL AUTOMÁTICO =====

// ===== SECCIÓN PERSONAJES  ===== //

const personajesContainer = document.querySelector(".personajes")
console.log(comic.personajes)

personajesContainer.innerHTML = "";

comic.personajes.forEach( char => {
    const div = document.createElement ('div')
    div.classList.add('personaje', 'per-nombre' );

    div.innerHTML = `
                <a href="./assets/personajes.html?id=${char.id}">
                <img src="${char.imagen}" alt="${char.nombre}" class="per-imagen">
                <div class="per-nombre">${char.nombre}</div>
                <div class="per-rol">${char.descripcion}</div>
                </a>

    `
    personajesContainer.appendChild(div);
});
// ===== FIN SECCIÓN PERSONAJES  ===== //


// ===== SECCIÓN CAPÍTULOS  ===== //

const capitulosContainer = document.querySelector (".capitulos")
console.log(comic.capitulos)

capitulosContainer.innerHTML = "";

comic.capitulos.forEach( char => {
    const div = document.createElement ('div')
    div.classList.add('capitulo', 'cap-info', );
    div.innerHTML = `
                    <a href="./assets/capitulos.html?id=${char.id}">
                    <img src="${char.portada}" alt="${char.nombre}" class="per-imagen">
                    <div class="cap-numero">CAPITULO ${char.id}</div>
                    <div class="cap-titulo">${char.nombre}</div>
                    <p>${char.descripcion}</p>
                    </a>
              
    `
    capitulosContainer.appendChild(div);
});

// ===== FIN SECCIÓN CAPÍTULOS  ===== //


// ===== SECCIÓN MINI CAPÍTULOS  ===== //

const miniContainer = document.querySelector(".mini-capitulos")

miniContainer.innerHTML = "";

comic.capitulos.forEach( char => {
    const div = document.createElement ('div')
    div.classList.add('mini-cap' );
    div.innerHTML = `
                    <a href="./assets/capitulos.html?id=${char.id}">
                    <img src="${char.portada}" alt="${char.nombre}" class="mini-cap-img">
                    <div style="margin-top: 5px;">${char.nombre}</div>
                    </a>
    `
    miniContainer.appendChild(div);
});

// ===== FIN SECCIÓN MINI CAPÍTULOS  ===== //


const tPrincipal = document.querySelector ('.principal');
console.log(tPrincipal);


tPrincipal.innerHTML = `
<h1 class="titulo-grande">${comic.nombreComic}</h1>
            <p class="descripcion">${comic.sinopsis}</p>

`





