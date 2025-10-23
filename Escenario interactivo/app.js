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

// Escenario 3: interactividad y puntajes distintos (Huesos = modo INFINITO rápido)
(function(){
  // elementos
  const calabaza = document.getElementById('calabaza3');
  const mandy = document.getElementById('mandy3');
  const gatopa = document.getElementById('gatopa3');
  const huesos = document.getElementById('huesos3');
  const bily = document.getElementById('bily3');
  const bruja = document.getElementById('bruja3');

  const contadorEl = document.getElementById('contador3');
  const infoEl = document.getElementById('info3');

  // puntos por elemento (usar data-points si quieres)
  const puntos = {
    calabaza: 1,
    mandy: 2,
    gatopa: 3,
    bily: 5,
    bruja: 8
    // huesos será modo especial
  };

  // contador total del escenario 3
  let total = 0;
  let huesosInterval = null; // intervalo que hará la suma masiva
  let huesosActivo = false;

  // helper actualizar visual del contador (formato)
  function actualizarContador(){
    // mostrar número con separador de miles
    contadorEl.textContent = total.toLocaleString('es-ES');
  }

  // función para sumar puntos normales
  function sumar(n){
    total += n;
    actualizarContador();
    // pulso visual
    contadorEl.animate([{ transform:'scale(1)' },{ transform:'scale(1.08)' },{ transform:'scale(1)' }], { duration:220 });
  }

  // listeners para clickeables normales
  calabaza.addEventListener('click', ()=> {
    sumar(puntos.calabaza);
    // pequeño movimiento
    calabaza.style.transform = 'translateY(-6px) scale(1.03)';
    setTimeout(()=> calabaza.style.transform = '', 220);
  });

  mandy.addEventListener('click', ()=> {
    sumar(puntos.mandy);
    mandy.style.transform = 'translateY(-6px) scale(1.03)';
    setTimeout(()=> mandy.style.transform = '', 220);
  });

  gatopa.addEventListener('click', ()=> {
    sumar(puntos.gatopa);
    gatopa.style.transform = 'translateY(-6px) scale(1.03)';
    setTimeout(()=> gatopa.style.transform = '', 220);
  });

  bily.addEventListener('click', ()=> {
    sumar(puntos.bily);
    bily.style.transform = 'translateY(-6px) scale(1.03)';
    setTimeout(()=> bily.style.transform = '', 220);
  });

  bruja.addEventListener('click', ()=> {
    sumar(puntos.bruja);
    bruja.style.transform = 'translateY(-6px) scale(1.03)';
    setTimeout(()=> bruja.style.transform = '', 220);
  });

  // HUESOS: modo C (suma infinita / rápida)
  // comportamiento: al primer click se activa un setInterval que suma rápidamente; al siguiente click se desactiva.
  huesos.addEventListener('click', ()=>{
    if(!huesosActivo){
      // activar modo infinito: interval que suma mucho muy rápido
      huesosActivo = true;
      infoEl.textContent = 'HUESOS: MODO INFINITO ACTIVADO ⚡';
      huesos.classList.add('animar-bounce'); // efecto visual extra
      // intervalo agresivo: +1000 cada 60ms (ajusta si quieres más/menos)
      huesosInterval = setInterval(()=>{
        total += 1000;
        // cada 10 ticks actualizamos (para ahorrar repaints), aquí actualizamos siempre porque la intención es ver incremento rápido
        actualizarContador();
      }, 60);
    } else {
      // desactivar
      huesosActivo = false;
      infoEl.textContent = 'Huesos: modo INFINITO (clic para activar)';
      huesos.classList.remove('animar-bounce');
      clearInterval(huesosInterval);
      huesosInterval = null;
    }
    // feedback de pulsación
    huesos.style.transform = 'translateY(-6px) scale(1.02)';
    setTimeout(()=> huesos.style.transform = '', 160);
  });

  // Añadir animaciones iniciales a los animables:
  // - gatopa: animar-volar (volando)
  // - bruja: animar-volar (volando)
  // - (podemos hacer que huesos tenga un ligero pulso inicial)
  gatopa.classList.add('animar-volar');
  bruja.classList.add('animar-volar');
  // huesos inicialmente con pulsito leve
  huesos.classList.add('animar-bounce');

  // accesibilidad: permitir Enter/Space para clics
  [calabaza, mandy, gatopa, huesos, bily, bruja].forEach(el=>{
    el.setAttribute('tabindex','0');
    el.addEventListener('keydown', (e)=>{
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        el.click();
      }
    });
  });

  // inicializar contador en 0
  actualizarContador();

})();
