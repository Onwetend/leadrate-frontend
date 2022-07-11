// import './vendor';
// import './helpers';
// import './components/social';
// import {ieFix} from './vendor/ie-fix';
// import {vhFix} from './vendor/vh-fix';
// import {actualYear} from './modules/actualYear';
// import header from './components/header';
// import lazyLoading from './modules/lazyLoading';
// import scrollToAnchor from './modules/scrollToAnchor';

// ieFix();
// vhFix();
// actualYear();
// scrollToAnchor.init();

// header.init();
// lazyLoading.init();

// Move upper folds on button hover / Перемещение верхних страниц при наведении на кнопку

const btn = document.querySelector(".heading__btn");

btn.addEventListener("mouseover", changePosition);
btn.addEventListener("mouseout", initialPosition);

function changePosition() {
	document.querySelector(".fold-first").style.top = "6px";
	document.querySelector(".fold-second").style.top = "-9px";
}

function initialPosition() {
	document.querySelector(".fold-first").style.top = "13px";
	document.querySelector(".fold-second").style.top = "3px";
}

// Background gradient animation / Анимация фонового градиента

var widths = new Array([50],[35]);
var step = 0;
var widthIndice = [0,1];
var animationSpeed = 0.012;

function animateWidth() {
var initialWidth = widths[widthIndice[0]];
var finalWidth = widths[widthIndice[1]];

var width = Math.round((1 - step) * initialWidth[0] + step * finalWidth[0]);

document.querySelector("body").style.background = "radial-gradient("+width+"% 50% at 50% 50%, #252e42 0%, #161c2e 100%)";

step += animationSpeed;
if ( step >= 1 ) {
	step %= 1;
	widthIndice[0] = widthIndice[1];
	widthIndice[1] = ( widthIndice[1] + Math.floor( 1 )) % 2;
	}
}

setInterval(animateWidth,15);
