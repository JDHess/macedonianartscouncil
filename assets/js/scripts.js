const windowEventListeners = [
	'DOMContentLoaded',
	'orientationchange',
	'onresize',
];

const equalHeightDivs = (larger, smaller) => {
	smaller.style.height = `${larger.offsetHeight}px`;
};

const equalHeightDivsCarousel = (largest, allItems) => {
	allItems.forEach(
		(item) => (item.style.height = `${largest.offsetHeight}px`)
	);
};

windowEventListeners.forEach((item) =>
	window.addEventListener(item, (event) => {
		if (document.getElementById('video-title-larger')) {
			equalHeightDivs(
				document.getElementById('video-title-larger'),
				document.getElementById('video-title-smaller')
			);
		}

		if (document.getElementById('home-map')) {
			equalHeightDivs(
				document.getElementById('home-map'),
				document.getElementById('home-country')
			);
			equalHeightDivs(
				document.getElementById('home-map'),
				document.getElementById('home-partings')
			);
			equalHeightDivs(
				document.getElementById('home-map-title'),
				document.getElementById('home-country-title')
			);
			equalHeightDivs(
				document.getElementById('home-map-title'),
				document.getElementById('home-partings-title')
			);
		}

		if (document.getElementById('carousel-partings-largest')) {
			equalHeightDivsCarousel(
				document.getElementById('carousel-partings-largest'),
				document.querySelectorAll('.carousel-item-partings')
			);
		}

		if (document.getElementById('carousel-affiliations-largest')) {
			equalHeightDivsCarousel(
				document.getElementById('carousel-affiliations-largest'),
				document.querySelectorAll('.carousel-item-affiliations')
			);
		}

		document.getElementById('burger-lines').onclick = function () {
			document
				.getElementById('mac-logo')
				.classList.toggle('mac-logo-div');
			document
				.getElementById('menu2-2v')
				.classList.toggle('nav-section-pad');
		};
	})
);
