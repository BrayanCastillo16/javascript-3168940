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

/* ------------- ESCENARIO 2 (Free Fire) ------------- */
(function(){
  const arma = document.getElementById('arma2');       // animable respirar
  const skull = document.getElementById('skull2');     // centro static
  const troll = document.getElementById('troll2');     // animable bounce
  const person = document.getElementById('person2');   // derecha static
  const botiquin = document.getElementById('botiquin2');// clickeable
  const diamantes = document.getElementById('diamantes2');// clickeable
  const darclick = document.getElementById('darclick2');
  const contador2 = document.getElementById('contador2');
  const info2 = document.getElementById('info2');

  let countDiam = 0;

  // Inicializar animaciones elegidas
  arma.classList.add('animar-respirar'); // respirar
  troll.classList.add('animar-bounce'); // bounce

  // Diamantes: al click sumar contador del escenario 2
  diamantes.addEventListener('click', ()=>{
    countDiam++;
    contador2.textContent = String(countDiam);

    // pequeña interacción visual
    diamantes.style.transform = 'scale(1.06)';
    setTimeout(()=> diamantes.style.transform = '', 260);

    // se puede mostrar un panel de info 2 al tercer click como ejemplo
    if(countDiam % 3 === 0){
      info2.classList.toggle('mostrar');
      setTimeout(()=> info2.classList.remove('mostrar'), 1800);
    }
  });

  // Botiquín: dar feedback + no suma al contador (puedes cambiar)
  botiquin.addEventListener('click', ()=>{
    botiquin.style.transform = 'translateY(-8px) scale(1.05)';
    setTimeout(()=> botiquin.style.transform = '', 240);
  });

  // Troll (animable) también puede togglear su animacion al clic
  troll.addEventListener('click', ()=>{
    // toggle bounce
    if(troll.classList.contains('animar-bounce')){
      troll.classList.remove('animar-bounce');
      troll.style.transform = 'translateY(0)'; // reset
    } else {
      troll.classList.add('animar-bounce');
    }
  });

  // Arma: al hacer clic puede mostrar info lateral
  arma.addEventListener('click', ()=>{
    info2.classList.toggle('mostrar');
  });

  // Dar click text effect (opcional, cuando se hace click en diamantes)
  darclick.addEventListener('click', ()=>{
    // forward to diamantes click for convenience
    diamantes.click();
  });

})();