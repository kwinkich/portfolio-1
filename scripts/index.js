const btn_menu = document.querySelector('.header__button-menu');
const menu_mobile = document.querySelector('.menu-mobile');
const menuLinks = document.querySelectorAll('.menu-mob-link');
const btnShowModal = document.querySelectorAll('.price-btn');
const btnCloseModal = document.querySelector('.modal-close-btn');
const modalService = document.querySelector('.modal-service');
const modalContainer = document.querySelector('.modal-container');

btn_menu.addEventListener('click', function () {
	btn_menu.classList.toggle('active');
	menu_mobile.classList.toggle('active');
	document.body.classList.toggle('lock');
});

menuLinks.forEach((link) => {
	link.addEventListener('click', function () {
		btn_menu.classList.remove('active');
		menu_mobile.classList.remove('active');
		document.body.classList.remove('lock');
	});
});

btnShowModal.forEach((btn) => {
	btn.addEventListener('click', function () {
		modalService.classList.toggle('show');
		modalContainer.classList.toggle('show');
		document.body.classList.toggle('lock');
	});
});

btnCloseModal.addEventListener('click', function () {
	modalService.classList.toggle('show');
	modalContainer.classList.toggle('show');
	document.body.classList.toggle('lock');
});

window.onload = function () {
	const textSlideAboutMe = document.querySelector('.text-slide-about-me');
	const textSlidePortfolio = document.querySelector('.text-slide-portfolio');
	const textSlidePrice = document.querySelector('.text-slide-price');
	const textSlideContact = document.querySelector('.text-slide-contact');

	const aboutMe = createEl('p', textSlideAboutMe);
	const portfolio = createEl('p', textSlidePortfolio);
	const price = createEl('p', textSlidePrice);
	const contact = createEl('p', textSlideContact);

	setInterval(() => {
		leftEl(aboutMe);
		leftEl(portfolio);
		leftEl(price);
		leftEl(contact);
	}, 5);

	function createEl(elTag, parentEl) {
		const arrayElemets = [];
		let elementWidth;

		if (parentEl.clientWidth > 600) {
			elementWidth = parentEl.clientWidth / 4;
		} else {
			elementWidth = parentEl.clientWidth / 2;
		}

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
