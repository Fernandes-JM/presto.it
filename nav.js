var navbar = document.getElementById("navbar")
let swiperWrapper = document.querySelector('.swiper-wrapper')
let reviews = [
  {user: 'Leonardo', description: 'bel sito', rating: 4},
  {user: 'Manuel', description: 'bel sito', rating: 3},
  {user: 'Alex', description: 'bel sito', rating: 2},
  {user: 'Carlo', description: 'bel sito', rating: 5},
  {user: 'Maria', description: 'bel sito', rating: 1},
]

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
    document.getElementById("navbar").style.backgroundColor = "#7e121d";

    }else{
        document.getElementById("navbar").style.backgroundColor = "#034f1b";
    }
});

reviews.forEach((reviews)=>{
  let div = document.createElement('div');
  div.classList.add('swiper-slider');
  div.innerHTML = 
          `<div class="reviewCard">
              <h3 class="cliente">${review.user}</h3>
              <p>${review.description}</p>
              <span>
                  <a href=""> <i class="fa-solid fa-star fa-xs"> </i> </a>
                  <a href=""> <i class="fa-solid fa-star fa-xs"> </i> </a>
                  <a href=""> <i class="fa-solid fa-star fa-xs"> </i> </a>
              </span>
            </div> `
    swiperWrapper.appendChild(div);
            
});



const swiper = new Swiper('.swiper-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

});

