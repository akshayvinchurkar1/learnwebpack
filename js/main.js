import styles from '../css/style.css';

// Sticky nav
const nav = document.querySelector('nav');
const sticky = nav.offsetTop;

window.onscroll = function() {
	if (window.scrollY > sticky) {
        nav.classList.add('sticky');
		// console.log('success');
    } else {
        nav.classList.remove('sticky');
		// console.log('fail');
    }
}

// night mode
const night = document.querySelector('.night-mode');
const body = document.querySelector('body');

function toggleClass() {
	body.classList.toggle('night');
}

night.addEventListener('click', toggleClass);