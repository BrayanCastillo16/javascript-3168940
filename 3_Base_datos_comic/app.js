      const personajes = document.querySelector(".personajes");


      comic.personajes.forEach( char => {
        const section = document.createElement("personajes");
        section.classList.add("section");
        section.innerHTML = `
       <h2>${char.nombre}</h2>
  <div class="cards">
    <div class="card">
      <img src="${char.imagen}" alt="Juanes">
      <h3>Juanes</h3>
    </div>
        `;

        personajes.appendChild(div);
      });
       
      
      
      const padre = document.querySelector(".padre");


      comic.padre.forEach( capitulos => {
        const section = document.createElement("padre");
        section.classList.add("div");
        section.innerHTML = `
       <section class="hero">
      <div class="hero-slides" id="heroSlides">
        <div class="slide" data-index="0">
          <div class="slide-content">
            <h1>${capitulos.name}</h1>
            <p>${capitulos.descripcion}</p>
            <a class="btn" href="#">Ver Mas</a>
          </div>
          <img alt="${capitulos.portadaCapitulo}" src="${capitulo.portadaCapitulo}" />
        </div>
        <div class="slide" data-index="1">
          <div class="slide-content">
            <h1>${capitulos.nombre}</h1>
            <p>${capitulos.descripcion}</p>
            <a class="btn" href="#">Ver novedades</a>
      </div>
      <div class="hero-controls">
        <button id="prevHero">‹</button>
        <button id="nextHero">›</button>
      </div>
    </section>
        `;

        capitulos.appendChild(div);
      });
       


         

       
         