const menuMobile = document.querySelector('.cabecalho_menu-hamburguer');

menuMobile.addEventListener('click', openHamburguer);

function openHamburguer(){
    const menu = document.querySelector(".container-left");
    menu.classList.toggle('active');
}

const swiper = new Swiper('.swiper', {
    spaceBetween: 10,
    slidesPerView: 3,

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
  });
