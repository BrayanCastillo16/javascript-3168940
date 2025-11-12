// Hero carousel
(function(){
  const slides = document.querySelectorAll('.slide');
  const container = document.getElementById('heroSlides');
  let idx = 0;
  function show(i){
    const w = container.clientWidth;
    container.style.transform = `translateX(${-i * w}px)`;
    idx = i;
  }
  window.addEventListener('resize', ()=> show(idx));
  document.getElementById('prevHero').addEventListener('click', ()=> show((idx - 1 + slides.length) % slides.length));
  document.getElementById('nextHero').addEventListener('click', ()=> show((idx + 1) % slides.length));
  // auto-advance
  setInterval(()=> show((idx + 1) % slides.length), 6000);
})();

// Simple product population
(function(){
  const products = [
    {id:1,title:"Old Skool Classic",price:"$59.99",img:"https://via.placeholder.com/400x300?text=Zapato+1"},
    {id:2,title:"Classic Slip-On",price:"$49.99",img:"https://via.placeholder.com/400x300?text=Zapato+2"},
    {id:3,title:"Sk8-Hi",price:"$79.99",img:"https://via.placeholder.com/400x300?text=Zapato+3"},
    {id:4,title:"Platform",price:"$69.99",img:"https://via.placeholder.com/400x300?text=Zapato+4"},
    {id:5,title:"Checkerboard",price:"$54.99",img:"https://via.placeholder.com/400x300?text=Zapato+5"},
    {id:6,title:"Slip-On Kids",price:"$34.99",img:"https://via.placeholder.com/400x300?text=Zapato+6"}
  ];
  const grid = document.getElementById('productGrid');
  products.forEach(p=>{
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <h3>${p.title}</h3>
      <p>${p.price}</p>
      <button class="btn" onclick="alert('Agregar ${p.title}')">Add</button>
    `;
    grid.appendChild(card);
  });
})();
