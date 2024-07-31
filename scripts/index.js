const btn_menu = document.querySelector('.header__button-menu');
const menu_mobile = document.querySelector('.menu-mobile');

btn_menu.addEventListener('click', function () {
	btn_menu.classList.toggle('active');
	menu_mobile.classList.toggle('active');
});
