import { imageSlider } from "./modules/imageSlider.js";
import { hamburger, mobileNavigation } from './modules/navigation.js';
import { showToTopBtn } from "./modules/scrollTop.js";
import { showImpressum } from "./modules/impressum.js";
const container = document.querySelector('.container');
const baseURI = window.location.origin + '/';
const currentLocation = window.location.href;
const homePageAnchor = document.getElementById('home');

window.addEventListener('load', () => {

    if (container) {
        imageSlider(); showImpressum();
    }
    // accessability page current
    if (currentLocation === baseURI) {
        homePageAnchor.setAttribute('aria-current', 'page');
    }
    // mobile navigation
    if (hamburger) {
        hamburger.addEventListener('click', mobileNavigation);
        hamburger.addEventListener('keydown', (e) => {
            if (e.isComposing || e.keyCode !== 13) {
                return;
            }
            mobileNavigation();
        });

    }

});

// toTopButton
let lastKnownScrollPosition = 0;
let ticking = false;
/* eslint-disable-next-line */
window.addEventListener('scroll', function (e) {
    lastKnownScrollPosition = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(function () {
            showToTopBtn(lastKnownScrollPosition);
            ticking = false;
        });

        ticking = true;
    }
});