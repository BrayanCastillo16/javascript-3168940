const clickeables = document.querySelectorAll(".clickeable");
const contador = document.getElementById("contador");
let puntos = 0;

// Cada clic en un clickeable suma al contador y genera un efecto
clickeables.forEach(el => {
  el.addEventListener("click", () => {
    puntos++;
    contador.textContent = puntos;

    // Pequeña animación de escala
    el.style.transform = "scale(1.3)";
    setTimeout(() => el.style.transform = "scale(1)", 300);

    // Movimiento aleatorio
    const randomX = Math.random() * 650;
    const randomY = Math.random() * 400;
    el.style.left = `${randomX}px`;
    el.style.top = `${randomY}px`;
  });
});
