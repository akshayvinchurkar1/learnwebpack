import styles from '../css/style.css';
var $ = require('jquery');

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
const night = $('.night-mode');
const body = $('body');

function toggleClass() {
	body.classList.toggle('night');
}

$('.night-mode').click(function() {
    toggleClass();
});