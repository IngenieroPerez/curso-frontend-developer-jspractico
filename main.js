const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
/*Usando arrow functions seria --> */
const toggleDesktopMenu = () => desktopMenu.classList.toggle('inactive');

menuEmail.addEventListener('click', toggleDesktopMenu);

/*function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive')
}*/