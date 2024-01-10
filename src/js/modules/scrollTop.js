const scrollToTopBtn = document.querySelector(".totop__btn");
const rootElement = document.documentElement;
const header = document.querySelector('.nav');
let prevScrollPos = window.scrollY;


function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

export function showToTopBtn(scrollPos) {
    // Do something with the scroll position
    if (scrollPos > 400) {
        header.classList.add('hide');
        scrollToTopBtn.classList.add('active');
        scrollToTopBtn?.addEventListener('click', scrollToTop);
    }
    if (scrollPos < 400) {
        scrollToTopBtn.classList.remove('active');
        scrollToTopBtn?.removeEventListener('click', scrollToTop);
    }
    if (scrollPos < prevScrollPos) {
        header.classList.remove('hide');
    }
    prevScrollPos = scrollPos;
}




