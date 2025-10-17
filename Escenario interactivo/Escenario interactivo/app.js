const clickeables = document.querySelectorAll(".clickeable");
const contador = document.getElementById("contador");
const contador2 = document.getElementById("contador2");
const animable2 = document.getElementById("animable2");
const patricio = document.getElementById("patricio");
const infoCuadro = document.getElementById("info-cuadro");

let puntos = 0;
let puntosPatricio = 0;

// Contador general
clickeables.forEach(el => {
  el.addEventListener("click", () => {
    if (el !== patricio) {
      puntos++;
      contador.textContent = puntos;
    }

    el.style.transform = "scale(1.3)";
    setTimeout(() => el.style.transform = "scale(1)", 300);
  });
});

// Contador especial solo para Patricio
patricio.addEventListener("click", () => {
  puntosPatricio++;
  contador2.textContent = puntosPatricio;
});

// Mostrar cuadro al hacer clic en animación 2
animable2.addEventListener("click", () => {
  infoCuadro.classList.toggle("mostrar");
});
