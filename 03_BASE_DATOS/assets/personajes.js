import { comic } from "../bd.js";

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));


const personaje = comic.personajes.find(p => p.id === id);





const personajeDetalle = document.querySelector ('.personaje-detalle');

if (!personaje) {
    personajeDetalle.innerHTML = `
        <div style="text-align:center; padding:120px 20px; color:#ccc; background:#0008;">
            <h1>Ups... Personaje no encontrado</h1>
            <p>Volverás al inicio en 3 segundos</p>
        </div>
    `;
    setTimeout(() => {
        window.location.href = "../index.html";
    }, 3000);
}

console.log(personajeDetalle);
personajeDetalle.innerHTML = `

<div class="personaje-detalle">

        <div class="header">
             <div class="logo">MI COMIC</div>
        <a href="../index.html"><button class="boton-volver">← VOLVER</button></a>
        </div>

        <!-- Banner del personaje -->
        <div class="banner-personaje">
            <div class="imagen-personaje"></div>
            <div class="info-banner">
                <h1 class="nombre-personaje">${personaje.nombre}</h1>
                <div class="rol-personaje">Protagonista</div>
                <p class="descripcion-corta">${personaje.descripcion}</p>
            </div>
        </div>

        <!-- Contenedor de información -->
        <div class="contenedor-info">

            <!-- Historia -->
            <div class="seccion">
                <h2>Historia</h2>
                <p class="texto-info">
                    ${personaje.historia}
                </p>
            </div>

            <!-- Características -->
            <div class="seccion">
                <h2>Características</h2>
                <div class="caracteristicas">
                    <div class="caracteristica">
                        <div class="caracteristica-titulo">EDAD</div>
                        <div class="caracteristica-valor">${personaje.edad}</div>
                    </div>
                    <div class="caracteristica">
                        <div class="caracteristica-titulo">ALTURA</div>
                        <div class="caracteristica-valor">${personaje.altura}</div>
                    </div>
                    <div class="caracteristica">
                        <div class="caracteristica-titulo">OCUPACIÓN</div>
                        <div class="caracteristica-valor">${personaje.ocupacion}</div>
                    </div>
                    <div class="caracteristica">
                        <div class="caracteristica-titulo">ORIGEN</div>
                        <div class="caracteristica-valor">${personaje.origen}</div>
                    </div>
                </div>
            </div>

            <!-- Habilidades -->
            <div class="seccion">
                <h2>Habilidades</h2>
                <div class="habilidades">
                    <div class="habilidad">Super Fuerza</div>
                    <div class="habilidad">Vuelo</div>
                    <div class="habilidad">Visión Láser</div>
                    <div class="habilidad">Resistencia</div>
                    <div class="habilidad">Velocidad</div>
                </div>
            </div>

            <!-- Personalidad -->
            <div class="seccion">
                <h2>Personalidad</h2>
                <p class="texto-info">
                    ${personaje.personalidad}
                </p>
            </div>

            <!-- Galería -->
            <div class="seccion">
                <h2>Galería</h2>
                <div class="galeria">
                    <div class="imagen-galeria"></div>
                </div>
            </div>

        </div>

    </div>



`

