import { imageSlider } from "./modules/imageSlider.js";
import { hamburger, mobileNavigation } from './modules/navigation.js';
const container = document.querySelector('.container');
const baseURI = window.location.origin + '/';
const currentLocation = window.location.href;
const homePageAnchor = document.getElementById('home');
window.addEventListener('load', () => {
    if (container) {
        imageSlider();
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