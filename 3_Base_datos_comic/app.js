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
       
      
      
      const Numerocap = document.querySelector(".hero-slides");

      Numerocap.innerHTML = "";


      comic.padre.forEach( cap => {
        const section = document.createElement("section");
        section.classList.add("section");
        section.innerHTML = `

       <div class="slide-content">
            <h1>capitulo${cap.id}</h1>
            <p>${cap.nombre}</p>
            <p>${cap.descripcion}</p>
            img src="${cap.portadaCapitulo}" alt="Capítulo 1">


            <a class="btn" href="#">Ver Mas</a>
          </div>
        `;

        Numerocap.appendChild(section);
      });
       


         

       
         