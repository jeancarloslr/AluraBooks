const menuMobile = document.querySelector('.cabecalho_menu-hamburguer');

menuMobile.addEventListener('click', openHamburguer);

function openHamburguer(){
    const menu = document.querySelector(".container-left");
    menu.classList.toggle('active');
}

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    effect: 'creative',
    creativeEffect: {
      prev: {
        // will set `translateZ(-400px)` on previous slides
        translate: [0, 0, -400],
      },
      next: {
        // will set `translateX(100%)` on next slides
        translate: ['100%', 0, 0],
      },
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
  });
