const menuMobile = document.querySelector('.cabecalho_menu-hamburguer');

menuMobile.addEventListener('click', openHamburguer);

function openHamburguer(){
    const menu = document.querySelector(".container-left");
    menu.classList.toggle('active');
}