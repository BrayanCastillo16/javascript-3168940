import { comic } from "./bd.js";

      const Numeropersonajes = document.querySelector(".personajes");

      Numeropersonajes.innerHTML = "";

      comic.personajes.forEach( char => {
        const section = document.createElement("section");
        section.classList.add("section");
        section.innerHTML = `
       <h2>${char.nombre}</h2>
  <div class="cards">
    <div class="card">
      <img src="${char.imagen}" alt="Juanes">
      <p>${char.descripcion}</p>
      <h3>Juanes</h3>
    </div>
        `;

        Numeropersonajes.appendChild(section);
      });
       
      
      
      const Numerocap = document.querySelector(".Hero");

      Numerocap.innerHTML = "";


      comic.capitulos.forEach( cap => {
        const section = document.createElement("section");
        section.classList.add("section");
        section.innerHTML = `

          <h1>Capítulo 1 - El descubrimiento</h1>
         <div class="Hero-slides" id="heroSlides">
         <.div class="slide" data-index="0">
         <div class="slide-content">
         <img src="capitulo1.png" alt="Capítulo 1 - El descubrimiento">
         </div>
         <div class="hero_controls">
          <h3>Capítulo 1</h3>
          <p>El descubrimiento</p>
        </div>


            <a class="btn" href="capitulos.html">Ver Mas</a>
        `;

        Numerocap.appendChild(section);
      });
       


         

       
         