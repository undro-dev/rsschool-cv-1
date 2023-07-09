const SKILLS_IMAGES = document.querySelectorAll('.slider-cards__item__img');
const SLIDER_CARDS = document.querySelector('.slider-cards');
const BTN_NEXT = document.querySelector('.skills-btn-controls__next');
const BTN_PREV = document.querySelector('.skills-btn-controls__prev');

let count = 0;
let width;

function init() {
	width = document.querySelector('.slider').offsetWidth;
	SLIDER_CARDS.style.width = width * SKILLS_IMAGES.length + 'px';
	SKILLS_IMAGES.forEach(img => (img.style.width = width + 'px'));
	rollSlider();
}

function getNextImg() {
	count++;
	if (count >= SKILLS_IMAGES.length) count = 0;
	rollSlider();
}
function getNextPrev() {
	count--;
	if (count < 0) count = SKILLS_IMAGES.length - 1;
	rollSlider();
}
function rollSlider() {
	SLIDER_CARDS.style.transform = 'translate(-' + count * width + 'px';
}

init();

window.addEventListener('resize', init);
BTN_NEXT.addEventListener('click', getNextImg);
BTN_PREV.addEventListener('click', getNextPrev);
