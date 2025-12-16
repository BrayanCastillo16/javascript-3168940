/* const infocomic = document.querySelector(".info-comic");

console.log(infocomic);

infocomic.innerHTML = `
    <small>${comic.year}</small>
    <h1>${comic.nombreComic}</h1>
    <p>${comic.sinopsis}</p>
    <p>${comic.genero}</p>
`
 */
/* const hero = document.querySelector(".hero");

const cardPersonajes = document.querySelector(".card-personajes");


console.log(comic.personajes);

comic.personajes.forEach( char => {
  const div = document.createElement("div");
  div.classList.add("personajes");

  div.innerHTML = `
      <img src="${char.imagen}" alt="">
      <p>${char.nombre}</p>
      <p>${char.descripcion}</p>
  `
  cardPersonajes.appendChild(div);
});
      */   


const personajesContainer = document.querySelector(".card-container");

console.log(comic.personajes);


personajesContainer.innerHTML = "";

comic.personajes.forEach( char => {
  const div = document.createElement('div');
  div.classList.add('card' );

  div.innerHTML = `
            <img src="${char.imagen}" alt="" width="100" height="100">
            <p class="name">${char.nombre}</p>
            <p class="description">${char.descripcion}</p>
  `
  personajesContainer.appendChild(div);
            

});


const capitulosContainer = document.querySelector(".wrap");
console.log(comic.capitulos);

capitulosContainer.innerHTML = "";

comic.capitulos.forEach( cap => {
  const div = document.createElement('div');
  div.classList.add('card' );

  div.innerHTML = `
            <h2${cap.nombre}</h2>


        <div class="list scroll-x">
          <article class="card episode js-episode" data-ep="1">
            <div class="ep-info">
              <img src="${cap.portada}" alt="" width="100" height="100">
              <h3>Capítulo 1</h3>
              <p>${cap.descripcion}/p>
            </div>
  `
  capitulosContainer.appendChild(div);
});