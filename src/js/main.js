import { imageSlider } from "./modules/imageSlider.js";
import { hamburger, mobileNavigation } from './modules/navigation.js';
import { showToTopBtn } from "./modules/scrollTop.js";
import { showImpressum } from "./modules/impressum.js";
import { observer } from "./modules/observer.js";
import { planComponent } from "./modules/planComponent.js";
import { createTitel } from "./modules/sitetitle.js";

const container = document.querySelector('.container');
const baseURI = window.location.origin + '/';
const currentLocation = window.location.href;
const homePageAnchor = document.getElementById('home');

window.addEventListener('load', () => {
    let itemsToObserve = document.querySelectorAll('.parallax__lead');
    itemsToObserve.forEach(item => {
        observer.observe(item);
    });
    createTitel();
    if (container) {
        imageSlider(); showImpressum();
    }
    if (container) {
        planComponent();

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