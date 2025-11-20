      const infocomic = document.querySelector(".info-comic");

       const cardpersonajes = document.querySelector("personajes");
  
     console.log(infocomic);

     infocomic. innerHTML = `
       <small>${comic.year}</small>
       <h1>${comic.nombrecomic}</h1>
       <p>${comic.sipnosis}</p>
       <p>${comic.genero}</p>
       `

       console.log(comic.personajes); 
       
       comic.personajes.forEach( char => { 
//crear elementos dinamicamente con javascript
        const div = document .createElement ("div")
        div .classList .add ("card-personajes")

        console.log(char.nombre);
        document .body .innerHTML = `<img src="${char.imagen}" width="200">`

       });






       
      

     

