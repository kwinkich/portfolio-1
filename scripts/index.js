// Переменные для элементов
const btn_menu = document.querySelector('.header__button-menu');
const menu_mobile = document.querySelector('.menu-mobile');
const menuLinks = document.querySelectorAll('.menu-mob-link');
const btnShowModal = document.querySelectorAll('.price-btn');
const btnCloseModal = document.querySelector('#close-modal');
const btnCloseViewer = document.querySelector('#close-img-view');
const modalService = document.querySelector('.modal-service');
const modalContainer = document.querySelector('.modal-container');
const portfolioPhotos = document.querySelectorAll('.portfolio-photo');
const viewBlock = document.querySelector('.image-view');
const viewContainer = document.querySelector('.view-container');
let imageView = null;

// Функция переключения классов
function toggleClass(elements, className) {
	elements.forEach((el) => el.classList.toggle(className));
}

// Обработчик для показа изображения
portfolioPhotos.forEach((photo) => {
	photo.addEventListener('click', function () {
		if (!imageView) {
			imageView = document.createElement('img');
			imageView.src = photo.firstElementChild.src;
			imageView.classList.add('view-container-img');
			viewContainer.appendChild(imageView);
		}
		toggleClass([viewBlock, viewContainer, document.body], 'active');
	});
});

// Обработчик для закрытия просмотра изображения
btnCloseViewer.addEventListener('click', function () {
	if (imageView) {
		imageView.remove();
		imageView = null;
	}
	toggleClass([viewBlock, viewContainer, document.body], 'active');
});

// Обработчик для меню
btn_menu.addEventListener('click', function () {
	toggleClass([btn_menu, menu_mobile, document.body], 'active');
});

// Закрытие меню при клике на ссылку
menuLinks.forEach((link) => {
	link.addEventListener('click', function () {
		toggleClass([btn_menu, menu_mobile, document.body], 'active');
	});
});

// Обработчик для модального окна
btnShowModal.forEach((btn) => {
	btn.addEventListener('click', function () {
		toggleClass([modalService, modalContainer, document.body], 'show');
	});
});

// Закрытие модального окна
btnCloseModal.addEventListener('click', function () {
	toggleClass([modalService, modalContainer, document.body], 'show');
});

// Анимация текста
window.onload = function () {
	const textSlides = [
		document.querySelector('.text-slide-about-me'),
		document.querySelector('.text-slide-portfolio'),
		document.querySelector('.text-slide-price'),
		document.querySelector('.text-slide-contact'),
	];

	const textElements = textSlides.map((slide) => createEl('p', slide));

	setInterval(() => {
		textElements.forEach(leftEl);
	}, 5);

	function createEl(elTag, parentEl) {
		const arrayElemets = [];
		const elementWidth =
			parentEl.clientWidth > 600
				? parentEl.clientWidth / 4
				: parentEl.clientWidth / 2;

		for (let i = 0; i < 10; i++) {
			const createdElement = document.createElement(elTag);
			createdElement.className = `paragraph-list anim-item-${i + 1}`;
			createdElement.innerText = parentEl.dataset.text;
			createdElement.style.width = `${elementWidth}px`;
			createdElement.style.left = `${
				window.innerWidth + (elementWidth + 20) * i
			}px`;
			parentEl.appendChild(createdElement);
			arrayElemets.push(createdElement);
		}

		return arrayElemets;
	}

	function leftEl(els) {
		for (let i = 0; i < els.length; i++) {
			let prevLeft = els[i].offsetLeft;
			if (prevLeft > -els[i].offsetWidth) {
				els[i].style.left = prevLeft - 2 + 'px';
			} else {
				const lastElementRight = Math.max(
					...els.map((el) => el.offsetLeft + el.offsetWidth)
				);
				els[i].style.left = `${lastElementRight + els[i].offsetWidth + 20}px`;
			}
		}
	}
};
